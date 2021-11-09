import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'

const initialState = {
  data:[],
  options:[],
  status:'idle',
  error:''
}

export const fetchOSThunk = createAsyncThunk('projects/fetchOSThunk', async (user_id) => {
  const response = await JsonClient.get('laptops/specification/list/os')
  console.log(response)
  return response.data
})

export const osSlice = createSlice({
  name: 'os',
  initialState,
  reducers: {
    push_item: (state,val) => {
        console.log('dispatching ----- ',val)
        state.data = [...state.data,val.payload]
        state.options = [...state.options,{value:val.payload, label:val.payload}]
    },
  },
  extraReducers: {
    [fetchOSThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchOSThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
      Array.from(action.payload).forEach((item,idx)=>{
          state.options = [...state.options,{value:item,label:item}]
      })
    },
    [fetchOSThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

// Action creators are generated for each case reducer function
export const { push_item} = osSlice.actions
export default osSlice.reducer
