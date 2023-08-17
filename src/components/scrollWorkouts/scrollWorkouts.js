import React from 'react'
import './scrollWorkouts.css'
import { NavLink } from 'react-router-dom'

function scrollWorkout({ workouts, deleteWorkout, filterWorkout, userID }) {
  
  const filteredWorkouts = workouts.filter(workout => workout.userId === userID)

  return (
    <div className='scrollWorkout-container'>
      <p>Last 7 Logged Workouts:</p>
      {workouts.length > 0 ? (
        <section>
          {filteredWorkouts.slice(0, 7).map((workout, index) => (
            <div key={index} onClick={() => filterWorkout(index)} className='single-scroll-workout'>
                <NavLink key={index} to={`/workout/${index}`} className='workout-link'>
                  <div className='title-tag-container'>
                    <p className='title-tag'>{workout.title}</p>
                  </div>
                  <div className='date-tag-container'>
                    <p className='date-tag'>{workout.date}</p>
                  </div>
                </NavLink>
                <div className='delete-button-container'>
                  <button className='delete-workout' onClick={() => deleteWorkout(index)}>Delete</button>
                </div>
              </div>
          )).reverse()}
        </section>
      ) : (
        <p>{workouts.length === 0 ? "Loading workouts..." : "No workouts available"}</p>
      )}
    </div>
  )
}

export default scrollWorkout