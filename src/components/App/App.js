import './App.css';
import React, { useEffect, useState } from 'react'
import { fetchWorkouts, addWorkout, deleteWorkoutAPI, loginUser } from '../../apiCalls'
import SingleWorkout from '../singleWorkout/singleWorkout'
import { Routes, Route, useNavigate } from 'react-router-dom'
import AllWorkouts from '../AllWorkouts/AllWorkouts';
import LoginPage from '../LoginPage/LoginPage';
import SignUp from '../SignUp/SignUp'
import Settings from '../Settings/Settings'
import MainPage from '../MainPage/MainPage'

function App() {

  const [workouts, setWorkouts] = useState([])
  const [singleWorkout, setSingleWorkout] = useState()
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userID, setUserID] = useState('')
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  
  useEffect(() => {
    fetchWorkouts()
      .then(data => {
        setWorkouts(data)
      })
      .catch(error => {
        console.log('Error fetching data', error)
      })
  }, [])

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  const handleLogin = async () => {
    try {
      const response = await loginUser({ username, password })
      const token = response.token;
      setUserID(response.user.id) 
      setUserName(response.user.username)
      setUserPassword(response.user.password)
      console.log(response.user.username)
      setIsAuthenticated(true)
      navigate(`/${response.user.username}/workouts`)
    } catch (error) {
      setError('Invalid credentials');
      alert('Not valid login info')
    }
  };

  const postRequest = (newObject) => {
    if(!newObject.title || !newObject.date || !newObject.description) {
      alert('Please fill in all required fields')
      return
    }

    addWorkout(newObject)
      .then(data => {
        console.log('Response', data)
        setWorkouts(data.workouts)
        setError(null)
      })
      .catch(error => {
        console.log('Error', error)
        setError('An error occurred while adding the workout')
      })
  };

  const deleteWorkout = (workoutId) => {
    const updatedWorkouts = workouts.filter(workout => workout.id !== workoutId);
    setWorkouts(updatedWorkouts);

    deleteWorkoutAPI(workoutId)
      .then(success => {
        if(success) {
          console.log(`Workout with ID ${workoutId} deleted successfully`)
        } else {
          console.log('Failed to delete workout')
          setWorkouts(workouts)
          alert('Please Refresh Page or Log Back In')
        }
      })
      .catch(error => {
        console.error('Error deleting workout:', error)
        setWorkouts(workouts)
      })
  }

  const filterWorkout = (id) => {

    const filteredWorkouts = workouts.filter(workout => workout.userId === userID)
    let singleWorkout = filteredWorkouts.filter((workout, index) => index === id)
    setSingleWorkout(singleWorkout)
    console.log(singleWorkout)
  }
  
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              handleLogin={handleLogin}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              error={error}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        {isAuthenticated && (
          <>
            <Route
              path="/:username/workouts"
              element={
                <MainPage 
                  postRequest={postRequest} 
                  userID={userID} 
                  workouts={workouts} 
                  deleteWorkout={deleteWorkout} 
                  filterWorkout={filterWorkout} 
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            <Route
              path="/workout/:title"
              element={<SingleWorkout singleWorkout={singleWorkout} userName={userName} />}
            />
            <Route
              path="/past/workouts"
              element={<AllWorkouts allWorkouts={workouts} filterWorkout={filterWorkout} deleteWorkout={deleteWorkout} userID={userID} userName={userName} />}
            />
            {/* <Route path="/signup" element={<SignUp />} /> */}
            <Route
              path="/settings"
              element={<Settings loggedInUsername={userName} userPassword={userPassword} loggedInUserId={userID} userName={userName} />}
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
