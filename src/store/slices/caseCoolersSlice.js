import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}


export const fetchCaseCoolersThunk = createAsyncThunk('casecoolers/fetchCaseCoolersThunk', async (user_id) => {
  const response = await JsonClient.get('casecoolers/all')
  console.log("casecoolers", response.data)
  return response.data
})

export const caseCoolersSlice = createSlice({
  name: 'casecoolers',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchCaseCoolersThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchCaseCoolersThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchCaseCoolersThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default caseCoolersSlice.reducer
