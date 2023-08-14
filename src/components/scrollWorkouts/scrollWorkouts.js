import React from 'react'
import './scrollWorkouts.css'

function scrollWorkout({ workouts, deleteWorkout }) {
  

  return (
    <div className='scrollWorkout-container'>
      {workouts.length > 0 ? (
        <section>
          {workouts.map((workout, index) => (
            <div key={index}>
              <section className='workout-info-small'>
                <p>{workout.title}</p>
                <p>{workout.date}</p>
                <button className='delete-workout' onClick={() => deleteWorkout(index)}>Delete</button>
              </section>
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