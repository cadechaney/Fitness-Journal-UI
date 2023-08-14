import React from 'react'


function scrollWorkout({ workouts, deleteWorkout }) {
  

  return (
    <>
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
    </>
  )
}

export default scrollWorkout