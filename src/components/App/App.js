import './App.css';
import React, { useEffect, useState } from 'react'
import { fetchWorkouts, addWorkout, deleteWorkoutAPI, loginUser } from '../../apiCalls'
import Header from '../Header/Header'
import ScrollWorkout from '../scrollWorkouts/scrollWorkouts'
import Form from '../Form/Form'
import SingleWorkout from '../singleWorkout/singleWorkout'
import { Routes, Route, useNavigate } from 'react-router-dom'
import AllWorkouts from '../AllWorkouts/AllWorkouts';
import LoginPage from '../LoginPage/LoginPage';
import SignUp from '../SignUp/SignUp'

function App() {

  const [workouts, setWorkouts] = useState([])
  const [singleWorkout, setSingleWorkout] = useState()
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userID, setUserID] = useState('')
  const [userName, setUserName] = useState('')
  
  useEffect(() => {
    fetchWorkouts()
      .then(data => {
        setWorkouts(data)
      })
      .catch(error => {
        console.log('Error fetching data', error)
      })
  }, [])

  const handleLogin = async () => {
    try {
      const response = await loginUser({ username, password })
      const token = response.token;
      setUserID(response.user.id) 
      setUserName(response.user.username)
      console.log(response.user)
      navigate(`/${response.user.username}/workouts`)
    } catch (error) {
      setError('Invalid credentials');
      alert('Not valid login info')
    }
  };

  useEffect(() => {
    console.log(userID);
    console.log(userName)
  }, [userID]);

  const postRequest = (newObject) => {
    if(!newObject.title || !newObject.date || !newObject.description) {
      alert('Please fill in all required fields')
      return
    }

    addWorkout(newObject)
      .then(data => {
        console.log('Response', data)
        setWorkouts(data.workouts)
      })
      .catch(error => {
        console.log('Error', error)
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
          path='/'
          element={<LoginPage 
          handleLogin={handleLogin} 
          username={username} 
          setUsername={setUsername} 
          password={password}
          setPassword={setPassword}
          error={error}
        />}
        />
        <Route 
          path='/:username/workouts' 
          element={(
            <>
              <Header />
              <div className='app-content'>
                <Form postRequest={postRequest} userID={userID} />
                <ScrollWorkout workouts={workouts} deleteWorkout={deleteWorkout} filterWorkout={filterWorkout} userID={userID} />
              </div>
            </>
          )} 
        />
        <Route 
          path='/workout/:title'
          element={<SingleWorkout singleWorkout={singleWorkout} userName={userName} />}
        />
        <Route 
          path='/past/workouts'
          element={<AllWorkouts allWorkouts={workouts} filterWorkout={filterWorkout} deleteWorkout={deleteWorkout} userID={userID} userName={userName}/>}
        />
        <Route 
          path='/signup'
          element={<SignUp />}
        />
      </Routes>
    </div>
  );
  
  
}

export default App;
