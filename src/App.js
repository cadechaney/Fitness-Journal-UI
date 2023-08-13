import './App.css';
import React, { useEffect } from 'react'

function App() {

  useEffect(() => {
    fetch("/stuff").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
      }
    )
  }, [])

  const postRequest = () => {
    fetch('/stuff', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({stuff: 'post'})
    })
    .then(response => response.json())
    .then(result => {
      console.log('Response', result)
    })
    .catch(error => {
      console.log('Error', error)
    })
  }

  return (
    <div className="App">
      <p>Hello world</p>
      <button onClick={postRequest}>Post Request</button>
    </div>
  );
}

export default App;
