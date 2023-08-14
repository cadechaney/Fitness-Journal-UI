import React from 'react'
import './scrollWorkouts.css'

function scrollWorkout({ workouts, deleteWorkout }) {
  

  return (
    <div className='scrollWorkout-container'>
      {workouts.length > 0 ? (
        <section>
          {workouts.map((workout, index) => (
            <div key={index}>
              <p>{workout.title}</p>
              <button onClick={() => deleteWorkout(index)}>Delete</button>
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