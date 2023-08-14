import './App.css';
import React, { useEffect, useState } from 'react'
import { fetchWorkouts, addWorkout, deleteWorkoutAPI } from '../../apiCalls'
import ScrollWorkout from '../scrollWorkouts/scrollWorkouts'
import Form from '../Form/Form'

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
    // const newObject = { title: 'New Workout', date: '01-04-2023', description: '...', extra: '...' };

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
      <Form postRequest={postRequest}/>
      <ScrollWorkout workouts={workouts} deleteWorkout={deleteWorkout} />
    </div>
  );
  
  
}

export default App;
