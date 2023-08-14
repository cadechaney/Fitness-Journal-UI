import './Form.css'
import React, { useState } from 'react'

function Form({ postRequest }) {

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    extra: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({...prevData, [name]: value}))
  }

  return (
    <div className='form-container'>
      <input 
        type='text' 
        name='title' 
        placeholder='Workout Title'
        value={formData.title}
        onChange={handleInputChange}>
      </input>
      <input 
        type='date' 
        name='date' 
        value={formData.date}
        onChange={handleInputChange}>
      </input>
      <input 
        type='text' 
        name='description' 
        placeholder='Workout Description'
        value={formData.description}
        onChange={handleInputChange}>
      </input>
      <input 
        type='text' 
        name='extra' 
        placeholder='Extra Notes'
        value={formData.extra}
        onChange={handleInputChange}>
      </input>
      <button onClick={() => postRequest(formData)}>Log Workout</button>
    </div>
  )
}

export default Form