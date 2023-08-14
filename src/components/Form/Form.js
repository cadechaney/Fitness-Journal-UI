import './Form.css'
import React from 'react'

function Form({ postRequest }) {

  return (
    <div className='form-container'>
      <button onClick={postRequest}>Post Request</button>
      <p>Form</p>
    </div>
  )
}

export default Form