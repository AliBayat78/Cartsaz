import { createSlice } from '@reduxjs/toolkit'
import { UserInfo } from '../../../models/models'

const initialState: UserInfo[] = []

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
