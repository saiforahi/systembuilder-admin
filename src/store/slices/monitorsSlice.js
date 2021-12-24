import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}


export const fetchMonitorsThunk = createAsyncThunk('monitors/fetchMonitorsThunk', async (user_id) => {
  const response = await JsonClient.get('monitors/all')
  console.log("monitors", response.data)
  return response.data
})

export const monitorsSlice = createSlice({
  name: 'monitors',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchMonitorsThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchMonitorsThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchMonitorsThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default monitorsSlice.reducer
