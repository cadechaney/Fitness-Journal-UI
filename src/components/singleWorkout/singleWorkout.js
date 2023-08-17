import './singleWorkout.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import backArrow from '../../assets/arrow+back+back+left+previous+stroke+arrow+icon-1320185739200187742.png'

function SingleWorkout({ singleWorkout, userName }) {
  const navigate = useNavigate()
  const workout = singleWorkout[0]

  return (
    <main className='singleWorkout-container'>
      <div className='title-date'>
        <div className='view-home-button'>
          <img className='back-arrow' src={backArrow} alt='back arrow' onClick={() => navigate(`/${userName}/workouts`)}></img>
        </div>
        <div className='single-workout-header-content'>
          <h1>{workout.title}</h1>
          <h3>{workout.date}</h3>
        </div>
      </div>
      <div className='description-extra'>
        <section className='description-container'>
          <h4>Workout Description:</h4>
          <div className='description-text-container'>
            <p className='description-text'>{workout.description}</p>
          </div>
        </section>
        {workout.extra !== '' && (
          <section className='extra-container'>
            <h4>Extra Notes:</h4>
            <div className='extra-text-container'>
              <h5>{workout.extra}</h5>
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

export default SingleWorkout