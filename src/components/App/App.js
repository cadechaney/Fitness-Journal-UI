import './App.css';
import React, { useEffect, useState } from 'react'
import { fetchWorkouts, addWorkout, deleteWorkoutAPI } from '../../apiCalls'
import Header from '../Header/Header'
import ScrollWorkout from '../scrollWorkouts/scrollWorkouts'
import Form from '../Form/Form'
import SingleWorkout from '../singleWorkout/singleWorkout'

function App() {

  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    fetchWorkouts()
      .then(data => {
        setWorkouts(data)
      })
      .catch(error => {
        console.log('Error fetching data', error)
      })
  }, [])

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

  const deleteWorkout = (index) => {

    const updatedWorkouts = workouts.filter((_, i) => i !== index);
    setWorkouts(updatedWorkouts);

    deleteWorkoutAPI(index)
      .then(success => {
        if(success) {
          console.log(`Workout at index ${index} deleted successfully`)
        } else {
          console.log('Failed to delete workout')
          setWorkouts(workouts)
        }
      })
      .catch(error => {
        console.error('Error deleting workout:', error)
        setWorkouts(workouts)
      })
  }
  
  return (
    <div className="App">
      <Header />
      <div className='app-content'>
        <Form postRequest={postRequest}/>
        <ScrollWorkout workouts={workouts} deleteWorkout={deleteWorkout} />
      </div>
      <SingleWorkout />
    </div>
  );
  
  
}

export default App;
