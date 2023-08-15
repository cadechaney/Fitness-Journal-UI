import React from 'react'
import './scrollWorkouts.css'
import { NavLink } from 'react-router-dom'

function scrollWorkout({ workouts, deleteWorkout, filterWorkout }) {
  
  return (
    <div className='scrollWorkout-container'>
      {workouts.length > 0 ? (
        <section>
          {workouts.slice(0, 7).map((workout, index) => (
            <div key={index} onClick={() => filterWorkout(index)} className='single-scroll-workout'>
                <NavLink key={index} to={`/workout/${index}`} className='workout-link'>
                  <section className='workout-info-small'>
                    <div className='title-tag-container'>
                      <p className='title-tag'>{workout.title}</p>
                    </div>
                    <p className='date-tag'>{workout.date}</p>
                  </section>
                </NavLink>
                <button className='delete-workout' onClick={() => deleteWorkout(index)}>Delete</button>
              </div>
          ))}
        </section>
      ) : (
        <p>{workouts.length === 0 ? "Loading workouts..." : "No workouts available"}</p>
      )}
    </div>
  )
}

export default scrollWorkout