import './SignUp.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUpUser } from '../../apiCalls'

function SignUp() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a user object with the form data
    const newUser = {
      username,
      password,
    };

    try {
      const data = await signUpUser(newUser)
      console.log('User registered successfully', data)
      navigate('/')
    } catch(error) {
      console.log('An error occurred', error)
    }
  };

  return (
    <div className='sign-up-container-two'>
      <header className='sign-up-header'>
        <h2 className='sign-up-title'>Sign Up For SweatScript</h2>
      </header>
      <main className='log-in-main'>
        <form className='log-in-form' onSubmit={handleSubmit}>
          <input
            className='username-sign-up-input'
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className='password-sign-up-input'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className='sign-up-button' type="submit">Sign Up</button>
        </form>
      </main>
    </div>
  );
}

export default SignUp