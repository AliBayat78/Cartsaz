import { createSlice } from '@reduxjs/toolkit'
import { VitrinProductsTypes, callInforMationTypes } from '../../../models/models'

interface vitrinSliceTypes {
  vitrinSetting: {
    LogoImage: string
    VitrinColor: {
      colorName: string
      colorCode: string
    }
    ShortDescription: string
  }
  callInformation: callInforMationTypes
  vitrinProducts: VitrinProductsTypes
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

  callInformation: {
    phoneNumber: '',
    instagramId: '',
    waNumber: '',
    telegramId: '',
    shopAddress: '',
    showContactInfo: false,
  },

  vitrinProducts: {
    showAllProducts: true,
    products: [],
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
    addCallInformation: (state, action) => {
      state.callInformation = action.payload
    },
    addVitrinProducts: (state, action) => {
      state.vitrinProducts.products.push(action.payload)
    },
    showAllProductsDispatcher: (state, action) => {
      state.vitrinProducts.showAllProducts = action.payload
    },
  },
})

export default VitrinSlice.reducer

export const {
  addLogoImage,
  addVitrinColor,
  addShortDescription,
  addCallInformation,
  addVitrinProducts,
  showAllProductsDispatcher,
} = VitrinSlice.actions
