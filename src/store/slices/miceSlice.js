import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}


export const fetchMiceThunk = createAsyncThunk('mice/fetchMiceThunk', async (user_id) => {
  const response = await JsonClient.get('mouses/all')
  console.log("mouses", response.data)
  return response.data
})

export const miceSlice = createSlice({
  name: 'mice',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchMiceThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchMiceThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchMiceThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default miceSlice.reducer
