import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    fetch("/stuff").then(
      response => response.json()
    ).then(
      data => {
        console.log(data.workouts)
        setWorkouts(data.workouts)
      })
      .catch(error => {
        console.log('Error fetching data', error)
      })
  }, [])

  const postRequest = () => {
    const newObject = { title: 'New Workout', date: '01-04-2023', description: '...', extra: '...' };

    fetch('/stuff', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newWorkout: newObject }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response', data);
        setWorkouts(data.workouts);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  const deleteWorkout = (index) => {
    fetch(`/stuff/${index}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          console.log(`Workout at index ${index} deleted successfully.`);
          // You might want to update your state or UI accordingly here
        } else {
          console.log('Failed to delete workout.');
        }
      })
      .catch(error => {
        console.error('Error deleting workout:', error);
      });
  }
  
  return (
    <div className="App">
      <p>Hello world</p>
      <button onClick={postRequest}>Post Request</button>
      {workouts.length > 0 ? (
        <section>
          {workouts.map((workout, index) => (
            <div key={index}>
              <p>{workout.title}</p>
              <button onClick={() => deleteWorkout(index)}>Delete</button>
            </div>
          ))}
        </section>
      ) : (
        <p>{workouts.length === 0 ? "Loading workouts..." : "No workouts available"}</p>
      )}
    </div>
  );
  
  
}

export default App;
