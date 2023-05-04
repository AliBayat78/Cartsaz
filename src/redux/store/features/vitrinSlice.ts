import { createSlice } from '@reduxjs/toolkit'

interface vitrinSliceTypes {
  vitrinSetting: {
    LogoImage: string
    VitrinColor: {
      colorName: string
      colorCode: string
    }
    ShortDescription: string
  }
}

const initialState: vitrinSliceTypes = {
  vitrinSetting: {
    LogoImage: '',
    VitrinColor: {
      colorName: 'primary',
      colorCode: '#0182FE',
    },
    ShortDescription: '',
  },
}

export const VitrinSlice = createSlice({
  name: 'vitrin',
  initialState,
  reducers: {
    addLogoImage: (state, action) => {
      state.vitrinSetting.LogoImage = action.payload
    },
    addVitrinColor: (state, action) => {
      state.vitrinSetting.VitrinColor = action.payload
    },
    addShortDescription: (state, action) => {
      state.vitrinSetting.ShortDescription = action.payload
    },
  },
})

export default VitrinSlice.reducer

export const { addLogoImage, addVitrinColor, addShortDescription } = VitrinSlice.actions
