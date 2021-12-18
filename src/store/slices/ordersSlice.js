import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}


export const fetchOrdersThunk = createAsyncThunk('orders/fetchOrdersThunk', async (user_id) => {
  const response = await JsonClient.get('orders/all')
  console.log("orders", response.data)
  return response.data
})

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchOrdersThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchOrdersThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchOrdersThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default ordersSlice.reducer
