import './LoginPage.css'
import React from 'react'
import { NavLink } from 'react-router-dom';

function LoginPage({ handleLogin, username, setUsername, password, setPassword, error }) {

  const clearInputs = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <div className='login-page'>
      <header className='login-header'>
        <h2 className='login-title'>Login to SweatScript</h2>
      </header>
      <main className='login-page-main'>
        <section className='login-input-container'>
          <input
            className='username-input'
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='password-input'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='login-submit-button' onClick={() => {handleLogin(); clearInputs(); }}>Login</button>
          <section className='sign-up-container'>
            <div></div>
            <NavLink className='sign-up-link' to='/signup'>
              <p className='sign-up-title'>Sign Up</p>
            </NavLink>
          </section>
        </section>
      </main>
      {error && <p>{error}</p>}
    </div>
  )
}

export default LoginPage