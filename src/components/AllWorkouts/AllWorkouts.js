import './AllWorkouts.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

function AllWorkouts({ allWorkouts, filterWorkout, deleteWorkout }) {

  return (
    <div className='all-workouts-container'>
      {allWorkouts.map((workout, index) => (
        <div key={index} onClick={() => filterWorkout(index)} className='all-single-scroll-workout'>
            <NavLink key={index} to={`/workout/${index}`} className='all-workout-link'>
              <div className='all-title-tag-container'>
                <p className='all-title-tag'>{workout.title}</p>
              </div>
              <div className='all-date-tag-container'>
                <p className='all-date-tag'>{workout.date}</p>
              </div>
            </NavLink>
            <div className='all-delete-button-container'>
              <button className='all-delete-workout' onClick={() => deleteWorkout(index)}>Delete</button>
            </div>
          </div>
      )).reverse()}
    </div>
  )
}

export default AllWorkouts