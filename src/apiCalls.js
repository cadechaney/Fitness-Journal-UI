const API_URL = '/stuff'; // Update this with your API endpoint
const USER_API_URL = '/users';

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${USER_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const fetchWorkouts = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.workouts;
  } catch (error) {
    console.error('Error fetching workouts:', error);
    throw error;
  }
};

export const addWorkout = async (newWorkout) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newWorkout })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding workout:', error);
    throw error;
  }
};

export const deleteWorkoutAPI = async (index) => {
  try {
    const response = await fetch(`${API_URL}/${index}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.ok;
  } catch (error) {
    console.error('Error deleting workout:', error);
    throw error;
  }
};
