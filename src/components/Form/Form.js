import './Form.css'
import React, { useState } from 'react'

function Form({ postRequest }) {

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    extra: ''
  })

  return (
    <div className='form-container'>
      <input 
        type='text' 
        name='title' 
        placeholder='Workout Title'
        value={formData.title}>
      </input>
      <input 
        type='date' 
        name='date' 
        value={formData.date}>
      </input>
      <input 
        type='text' 
        name='description' 
        placeholder='Workout Description'
        value={formData.description}>
      </input>
      <input 
        type='text' 
        name='extra' 
        placeholder='Extra Notes'
        value={formData.extra}>
      </input>
      <button onClick={() => postRequest(formData)}>Log Workout</button>
    </div>
  )
}

export default Form