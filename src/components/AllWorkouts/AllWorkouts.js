import './AllWorkouts.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import backArrow from '../../assets/arrow+back+back+left+previous+stroke+arrow+icon-1320185739200187742.png'
import { useNavigate } from 'react-router-dom'

function AllWorkouts({ allWorkouts, filterWorkout, deleteWorkout, userID, userName }) {
  const navigate = useNavigate()

  const filteredWorkouts = allWorkouts.filter(workout => workout.userId === userID)

  return (
    <main className='allWorkouts-header-container'>
      <header className='past-workouts-header'>
        <div className='view-home-button-all'>
          <img className='back-arrow-from-all' src={backArrow} alt='back arrow' onClick={() => navigate(`/${userName}/workouts`)}></img>
        </div>
        <h1 className='past-workouts-title'>All Past Workouts</h1>
        <div></div>
      </header>
      <div className='all-workouts-container'>
        {filteredWorkouts.length > 0 ? (
          filteredWorkouts.map((workout, index) => (
            <div key={index} onClick={() => filterWorkout(index)} className='all-single-scroll-workout'>
              <NavLink key={index} to={`/workout/${workout.title}`} className='all-workout-link'>
                <div className='all-title-tag-container'>
                  <p className='all-title-tag'>{workout.title}</p>
                </div>
                <div className='all-date-tag-container'>
                  <p className='all-date-tag'>{workout.date}</p>
                </div>
              </NavLink>
              <div className='all-delete-button-container'>
                <button className='all-delete-workout' onClick={() => deleteWorkout(workout.id)}>Delete</button>
              </div>
            </div>
          )).reverse()
        ) : (
          <p className='no-workouts-all'>{filteredWorkouts.length === 0 ? "You have no workouts logged" : "No workouts available"}</p>
        )}
      </div>
    </main>
  )
}

export default AllWorkouts