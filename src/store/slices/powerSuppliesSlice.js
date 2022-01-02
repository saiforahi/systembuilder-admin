import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}


export const fetchPowerSuppliesThunk = createAsyncThunk('powerSupplies/fetchPowerSuppliesThunk', async (user_id) => {
  const response = await JsonClient.get('powersupplies/all')
  console.log("powerSupplies", response.data)
  return response.data
})

export const powerSuppliesSlice = createSlice({
  name: 'powerSupplies',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchPowerSuppliesThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchPowerSuppliesThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchPowerSuppliesThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default powerSuppliesSlice.reducer
