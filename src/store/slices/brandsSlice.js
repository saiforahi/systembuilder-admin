import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'

const initialState = {
  data:[],
  status:'idle',
  error:''
}

export const fetchBrandsThunk = createAsyncThunk('projects/fetchBrandsThunk', async (user_id) => {
  const response = await JsonClient.get('brands/all')
  return response.data
})

export const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
   
  },
  extraReducers: {
    [fetchBrandsThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchBrandsThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchBrandsThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

// Action creators are generated for each case reducer function

export default brandsSlice.reducer
