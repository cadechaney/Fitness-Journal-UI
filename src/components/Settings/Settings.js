import './Settings.css'
import React, { useState } from 'react'
import { deleteUserAccount } from '../../apiCalls'
import { useNavigate } from 'react-router-dom'

function Settings({ loggedInUsername, userPassword, loggedInUserId }) {

  const navigate = useNavigate()
  const [inputUsername, setInputUsername] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  
  const handleAccountDelete = async () => {

    console.log(inputUsername)
    console.log(loggedInUsername)

    if(inputUsername === loggedInUsername && inputPassword === userPassword) {
      console.log('username settings', loggedInUsername)
      deleteUserAccount(loggedInUserId)
      navigate('/')
    } else {
      console.log('Invalid username or password')
    }
    
  }

  return (
    <div className='settings-container'>
      <nav className='settings-nav-bar'>
        <h4 className='delete-account-title-nav'>Delete Account</h4>
      </nav>
      <main className='delete-account-main'>
        <header className='account-deletion-header'>
          <h1 className='delete-account-title'>Delete Account?</h1>
        </header>
        <div className='account-deletion-form-container'>
          <section className='account-deletion-form'>
            <p>Please fill out the form below to delete your account</p>
            <label>Account Username:</label>
            <input 
              className='account-deletion-username-input'
              type='text' 
              placeholder='username'
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              ></input>
            <label>Password:</label>
            <input 
              className='account-deletion-password-input'
              type='password' 
              placeholder='password'
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            ></input>
            <section className='account-delete-button-container'>
              <div></div>
              <button className='delete-account-button' onClick={handleAccountDelete}>Delete</button>
            </section>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Settings