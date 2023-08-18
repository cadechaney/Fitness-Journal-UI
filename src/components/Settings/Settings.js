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
      <main>
        <h1 className='delete-accouunt-title'>Delete Account?</h1>
        <label>Account Username:</label>
        <input 
          type='text' 
          placeholder='username'
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
          ></input>
        <label>Password:</label>
        <input 
          type='password' 
          placeholder='password'
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        ></input>
        <button className='delete-account-button' onClick={handleAccountDelete}>Delete</button>
      </main>
    </div>
  )
}

export default Settings