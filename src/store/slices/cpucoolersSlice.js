import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}


export const fetchCPUcoolersThunk = createAsyncThunk('cpucoolers/fetchCPUcoolersThunk', async (user_id) => {
  const response = await JsonClient.get('cpucoolers/all')
  console.log("cpucoolers", response.data)
  return response.data
})

export const cpucoolersSlice = createSlice({
  name: 'cpucoolers',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchCPUcoolersThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchCPUcoolersThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchCPUcoolersThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default cpucoolersSlice.reducer
