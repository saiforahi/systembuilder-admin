import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}


export const fetchCasingsThunk = createAsyncThunk('casings/fetchCasingsThunk', async (user_id) => {
  const response = await JsonClient.get('cases/all')
  console.log("casings", response.data)
  return response.data
})

export const casingsSlice = createSlice({
  name: 'casings',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchCasingsThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchCasingsThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchCasingsThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default casingsSlice.reducer
