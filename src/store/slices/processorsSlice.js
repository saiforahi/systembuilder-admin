import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}


export const fetchProcessorsList = createAsyncThunk('processors/fetchProcessorsList', async (user_id) => {
  const response = await JsonClient.get('processors/all')
  console.log("processors", response.data)
  return response.data
})

export const processorsSlice = createSlice({
  name: 'processors',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchProcessorsList.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchProcessorsList.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchProcessorsList.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default processorsSlice.reducer
