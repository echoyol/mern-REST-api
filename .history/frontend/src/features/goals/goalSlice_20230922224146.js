import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//Get data from localStorage
const goal = JSON.parse(localStorage.getItem('goal'))

const initialState = {
  goal: goal ? goal : null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
}

export const goal = createSlice({
  name: 'goal',
  initialState,
})
