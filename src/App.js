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

  return (
    <div className="App">
      <p>Hello world</p>
    </div>
  );
}

export default App;
