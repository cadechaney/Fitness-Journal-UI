import './App.css';
import React, { useEffect } from 'react'

function App() {

  useEffect(() => {
    fetch("/stuff").then(
      response => response.json()
    ).then(
      data => {
        console.log(data.workouts)
      }
    )
  }, [])

  const postRequest = () => {
    // Fetch the current data first to have the current state of "stuff" array
    fetch("/stuff")
      .then(response => response.json())
      .then(data => {
        // Create a new object to add to the "stuff" array
        const newObject = { key: 'value' }; // Replace with your new object data
  
        // Add the new object to the "stuff" array
        const updatedStuff = [...data.workouts.stuff, newObject];
  
        // Send the updated data to the server
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
  

  return (
    <div className="App">
      <p>Hello world</p>
      <button onClick={postRequest}>Post Request</button>
    </div>
  );
}

export default App;
