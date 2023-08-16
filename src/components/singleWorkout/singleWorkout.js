import './singleWorkout.css'
import React from 'react'

function singleWorkout({ singleWorkout }) {

  const workout = singleWorkout[0]

  return (
    <main className='singleWorkout-container'>
      <div className='title-date'>
        <div className='view-home-button'>
          <p>back button</p>
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
        <section className='extra-container'>
          <h4>Extra Notes:</h4>
          <div className='extra-text-container'>
            <h5>{workout.extra}</h5>
          </div>
        </section>
      </div>
    </main>
  )
}

export default singleWorkout