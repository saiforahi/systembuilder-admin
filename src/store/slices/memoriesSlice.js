import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}


export const fetchMemoriesThunk = createAsyncThunk('storages/fetchMemoriesThunk', async (user_id) => {
  const response = await JsonClient.get('memories/all')
  console.log("memories", response.data)
  return response.data
})

export const memoriesSlice = createSlice({
  name: 'storages',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchMemoriesThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchMemoriesThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchMemoriesThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default memoriesSlice.reducer
