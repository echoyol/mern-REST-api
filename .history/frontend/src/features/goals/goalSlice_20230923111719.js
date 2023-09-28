import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//Get data from localStorage
const goals = JSON.parse(localStorage.getItem('goal'))

const initialState = {
  goals: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
}

export const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducer: {
    reset: (state) => initialState,
  },
  extraReducer: {},
})

export const { reset } = goalSlice.actions
export default goalSlice.reducer
