import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}


export const fetchStoragesList = createAsyncThunk('storages/fetchStoragesList', async (user_id) => {
  const response = await JsonClient.get('storages/all')
  console.log("storages", response.data)
  return response.data
})

export const storagesSlice = createSlice({
  name: 'storages',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchStoragesList.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchStoragesList.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchStoragesList.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default storagesSlice.reducer
