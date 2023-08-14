import './Form.css'
import React from 'react'

function Form({ postRequest }) {

  return (
    <div className='form-container'>
      <input type='text' name='title' placeholder='Workout Title'></input>
      <input type='date' name='date' ></input>
      <input type='text' name='description' placeholder='Workout Description'></input>
      <input type='text' name='extra' placeholder='Extra Notes'></input>
      <button onClick={postRequest}>Log Workout</button>
    </div>
  )
}

export default Form