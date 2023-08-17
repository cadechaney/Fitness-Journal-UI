import './Form.css'
import React, { useState } from 'react'

function Form({ postRequest, userID }) {

  const [formData, setFormData] = useState({
    userId: userID,
    title: '',
    date: '',
    description: '',
    extra: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({...prevData, [name]: value}))
  }

  const handleTextareaChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const clearInputs = () => {
    setFormData({
      title: '',
      date: '',
      description: '',
      extra: ''
    })
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
      <textarea
        name='description'
        rows={8}
        cols={30}
        value={formData.description}
        onChange={handleTextareaChange}
        placeholder='Write your workout here...'
      />
      <input 
        type='text' 
        name='extra' 
        placeholder='Extra Notes'
        value={formData.extra}
        onChange={handleInputChange}>
      </input>
      <button className='post-button' onClick={() => {
        postRequest(formData)
        clearInputs()
      }}>Log Workout</button>
    </div>
  )
}

export default Form