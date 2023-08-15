import './singleWorkout.css'
import React from 'react'

function singleWorkout({ singleWorkout }) {

  const workout = singleWorkout[0]

  return (
    <main className='singleWorkout-container'>
      <div className='title-date'>
        <h1>{workout.title}</h1>
        <h3>{workout.date}</h3>
      </div>
      <div className='description-extra'>
        <section className='description-container'>
          <h4>Workout Description:</h4>
          <p className='description-text'>{workout.description}</p>
        </section>
        <h4>Extra Notes:</h4>
        <h5>{workout.extra}</h5>
      </div>
    </main>
  )
}

export default singleWorkout