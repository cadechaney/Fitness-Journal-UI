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
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp