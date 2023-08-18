import './MainPage.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import Form from '../Form/Form'
import ScrollWorkout from '../scrollWorkouts/scrollWorkouts'

function MainPage({ postRequest, userID, workouts, deleteWorkout, filterWorkout, isAuthenticated }) {
  const navigate = useNavigate()

  if (isAuthenticated) {
    return (
      <>
        <Header />
        <div className="app-content">
          <Form postRequest={postRequest} userID={userID} />
          <ScrollWorkout workouts={workouts} deleteWorkout={deleteWorkout} filterWorkout={filterWorkout} userID={userID} />
        </div>
      </>
    )
  } else {
    navigate('/')
    return null
  }
}

export default MainPage