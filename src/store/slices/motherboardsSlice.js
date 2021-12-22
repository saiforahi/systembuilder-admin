import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}


export const fetchMotherboardsThunk = createAsyncThunk('motherboards/fetchMotherboardsThunk', async (user_id) => {
  const response = await JsonClient.get('motherboards/all')
  console.log("motherboards", response.data)
  return response.data
})

export const motherboardsSlice = createSlice({
  name: 'motherboards',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchMotherboardsThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchMotherboardsThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchMotherboardsThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default motherboardsSlice.reducer
