import './Form.css'
import React, { useState } from 'react'

function Form({ postRequest, userID }) {
  const [formData, setFormData] = useState({
    id: Date.now(),
    userId: userID,
    title: '',
    date: '',
    description: '',
    extra: ''
  });

  const [needsLogin, setNeedsLogin] = useState(false); // State to track the need to re-log in

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTextareaChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const clearInputs = () => {
    setFormData({
      userId: userID,
      title: '',
      date: '',
      description: '',
      extra: ''
    });
  };

  const canSubmit = formData.userId !== '' && formData.id !== '';

  const handleSubmit = async () => {
    if (!canSubmit) {
      setNeedsLogin(true); // Set the needsLogin state to true if the user can't submit
      return;
    }

    // Reset the needsLogin state if the user can submit
    setNeedsLogin(false);

    try {
      await postRequest(formData);
      clearInputs();
    } catch (error) {
      console.error('Error posting workout:', error);
    }
  };

  return (
    <div className='form-container'>
      <h3>Log Your Workout:</h3>
      {needsLogin && (
        <p className='login-message'>
          We Apologize, you need to relogin to submit another workout.
        </p>
      )}
      <input
        type='text'
        name='title'
        placeholder='Workout Title'
        value={formData.title}
        onChange={handleInputChange}
      />
      <input
        type='date'
        name='date'
        value={formData.date}
        onChange={handleInputChange}
      />
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
        onChange={handleInputChange}
      />
      <button className='post-button' onClick={handleSubmit}>
        Log Workout
      </button>
    </div>
  );
}

export default Form;
