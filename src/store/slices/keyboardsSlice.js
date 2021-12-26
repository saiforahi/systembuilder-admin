import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}


export const fetchKeyboardsThunk = createAsyncThunk('keyboards/fetchKeyboardsThunk', async (user_id) => {
  const response = await JsonClient.get('keyboards/all')
  console.log("keyboards", response.data)
  return response.data
})

export const keyboardsSlice = createSlice({
  name: 'keyboards',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchKeyboardsThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchKeyboardsThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchKeyboardsThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default keyboardsSlice.reducer
