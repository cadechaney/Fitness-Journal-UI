import './Settings.css'
import React from 'react'
import { deleteUserAccount } from '../../apiCalls'
import { useNavigate } from 'react-router-dom'

function Settings({ loggedInID }) {

  const navigate = useNavigate()
  
  const handleAccountDelete = async () => {
    
    console.log('username settings', loggedInID)
    deleteUserAccount(loggedInID)
    navigate('/')
  }

  return (
    <div className='settings-container'>
      <nav className='settings-nav-bar'>
        <h4 className='delete-account-title-nav'>Delete Account</h4>
      </nav>
      <main>
        <h1 className='delete-accouunt-title'>Delete Account?</h1>
        <label>Account Username:</label>
        <input type='text' placeholder='username'></input>
        <label>Password:</label>
        <input type='text' placeholder='password'></input>
        <button className='delete-account-button' onClick={handleAccountDelete}>Delete</button>
      </main>
    </div>
  )
}

export default Settings