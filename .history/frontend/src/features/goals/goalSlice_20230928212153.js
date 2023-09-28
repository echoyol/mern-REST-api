import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import goalService from './goalService'
//Get data from localStorage
// const goals = JSON.parse(localStorage.getItem('goal'))

const initialState = {
  goals: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
}

//Create new goal
export const createGoal = createAsyncThunk(
  'goals/create',
  async (goalData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await goalService.createGoal(goalData, token)
    } catch (error) {
      const messgae =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error
      return thunkAPI.rejectWithValue(messgae)
    }
  }
)

//Get user goal
export const getGoals = createAsyncThunk(
  'goals/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await goalService.getGoal(token)
    } catch (error) {
      const messgae =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error
      return thunkAPI.rejectWithValue(messgae)
    }
  }
)

//Delete user goal
export const deleteGoals = createAsyncThunk(
  'goals/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await goalService.deleteGoal(id, token)
    } catch (error) {
      const messgae =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error
      return thunkAPI.rejectWithValue(messgae)
    }
  }
)

export const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals.push(action.payload)
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getGoals.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getGoals.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals = action.payload
      })
      .addCase(getGoals.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteGoals.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteGoals.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        console.log(action.payload)

        state.goals = state.goals.filter((goal) => goal._id !== action.payload)
      })
      .addCase(deleteGoals.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = goalSlice.actions
export default goalSlice.reducer
