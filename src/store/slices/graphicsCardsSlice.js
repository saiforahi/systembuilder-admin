import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}


export const fetchGraphicsCardsThunk = createAsyncThunk('graphics/fetchGraphicsCardsThunk', async (user_id) => {
  const response = await JsonClient.get('graphics/all')
  console.log("graphics", response.data)
  return response.data
})

export const graphiCscardsSlice = createSlice({
  name: 'graphics',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchGraphicsCardsThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchGraphicsCardsThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchGraphicsCardsThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default graphiCscardsSlice.reducer
