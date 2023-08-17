import './LoginPage.css'
import React from 'react'
import { loginAPI } from '../../apiCalls';

function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await loginAPI({ username, password });
      const token = response.token;
      // Store the token in local storage or a cookie
      // Redirect the user to a protected page
    } catch (error) {
      setError('Invalid credentials');
    }
  };


  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  )
}

export default LoginPage