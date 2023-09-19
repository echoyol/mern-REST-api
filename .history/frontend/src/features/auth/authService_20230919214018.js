import axios from 'axios'

const API_URL = '/api/users/'

//Register user
const register = async (userDate) => {
  const response = await axios.post(API_URL, userDate)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

export default authService
