import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}


export const fetchPreBuildPcs = createAsyncThunk('prebuilds/fetchPreBuildPcs', async (user_id) => {
  const response = await JsonClient.get('pre-built/all')
  console.log("prebuilds", response.data)
  return response.data
})

export const prebuildSlice = createSlice({
  name: 'prebuilds',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchPreBuildPcs.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchPreBuildPcs.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchPreBuildPcs.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default prebuildSlice.reducer
