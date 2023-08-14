import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    fetch("/stuff").then(
      response => response.json()
    ).then(
      data => {
        console.log(data.workouts.stuff)
        setWorkouts(data.workouts.stuff)
      })
      .catch(error => {
        console.log('Error fetching data', error)
      })
  }, [])

  const postRequest = () => {
    fetch("/stuff")
      .then(response => response.json())
      .then(data => {
        const newObject = { key: 'value' }; 
        const updatedStuff = [...data.workouts.stuff, newObject];
  
        fetch('/stuff', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ workouts: { stuff: updatedStuff } })
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              console.log('Broken');
            }
          })
          .then(result => {
            console.log('Response', result);
          })
          .catch(error => {
            console.log('Error', error);
          });
      })
      .catch(error => {
        console.log('Error fetching current data', error);
      });
  };

  const deleteWorkout = (value) => {
    console.log(value)
  }
  
  return (
    <div className="App">
      <p>Hello world</p>
      <button onClick={postRequest}>Post Request</button>
      {workouts.length > 0 ? (
        <section>
          {workouts.map((workout, index) => (
            <div key={index}>
              <p>{workout.key}</p>
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
