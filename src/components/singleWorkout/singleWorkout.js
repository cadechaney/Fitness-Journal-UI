import './singleWorkout.css'
import React from 'react'

function singleWorkout() {

  return (
    <main className='singleWorkout-container'>
      <div className='title-date'>
        <h1>Title</h1>
        <h3>Date</h3>
      </div>
      <div className='description-extra'>
        <section className='description-container'>
          <p className='description-text'>Description</p>
        </section>
        <h4>Extra</h4>
      </div>
    </main>
  )
}

export default singleWorkout