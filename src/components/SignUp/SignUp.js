import './SignUp.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

    // Send POST request to the backend
    try {
      const response = await fetch('/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        // Handle success
        console.log('User registered successfully');
        navigate('/')
        // You can redirect or display a success message here
      } else {
        // Handle error
        const errorData = await response.json();
        console.error('Registration error:', errorData.error);
        // Display an error message to the user
      }
    } catch (error) {
      console.error('An error occurred:', error);
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