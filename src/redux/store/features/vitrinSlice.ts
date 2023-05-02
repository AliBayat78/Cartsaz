import { createSlice } from '@reduxjs/toolkit'

interface vitrinSliceTypes {
  vitrinUrl: string
}

const initialState: vitrinSliceTypes = {
  vitrinUrl: '',
}

export const VitrinSlice = createSlice({
  name: 'vitrin',
  initialState,
  reducers: {
    addVitrinUrl: (state, action) => {
      state.vitrinUrl = action.payload
    },
  },
})

export const { addVitrinUrl } = VitrinSlice.actions

export default VitrinSlice.reducer
