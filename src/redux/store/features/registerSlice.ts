import { RegisterInputs } from './../../../models/models'
import { createSlice } from '@reduxjs/toolkit'

const initialState: RegisterInputs[] = []

export const RegisterSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    },
  },
})

export default RegisterSlice.reducer

export const { addUser } = RegisterSlice.actions
