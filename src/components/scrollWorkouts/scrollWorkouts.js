import React from 'react'
import './scrollWorkouts.css'
import { NavLink } from 'react-router-dom'

function scrollWorkout({ workouts, deleteWorkout }) {
  
  return (
    <div className='scrollWorkout-container'>
      {workouts.length > 0 ? (
        <section>
          {workouts.slice(0, 7).map((workout, index) => (
            <NavLink key={index} to={`/workout/${index}`}>
              <div key={index}>
                <section className='workout-info-small'>
                  <p>{workout.title}</p>
                  <p>{workout.date}</p>
                  <button className='delete-workout' onClick={() => deleteWorkout(index)}>Delete</button>
                </section>
              </div>
            </NavLink>
          ))}
        </section>
      ) : (
        <p>{workouts.length === 0 ? "Loading workouts..." : "No workouts available"}</p>
      )}
    </div>
  )
}

export default scrollWorkout