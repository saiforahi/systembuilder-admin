import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}


export const fetchLaptopList = createAsyncThunk('profile/fetchLaptopList', async (user_id) => {
  const response = await JsonClient.get('laptops/all')
  console.log("laptops", response.data)
  return response.data
})

export const laptopsSlice = createSlice({
  name: 'laptops',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchLaptopList.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchLaptopList.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchLaptopList.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default laptopsSlice.reducer
