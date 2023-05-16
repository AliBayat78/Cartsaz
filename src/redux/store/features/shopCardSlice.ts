import { createSlice } from '@reduxjs/toolkit'
import { ProductCardTypes } from '../../../models/models'

const initialState: ProductCardTypes[] = []

export const ShopCardSlice = createSlice({
  name: 'shopCard',
  initialState,
  reducers: {
    addInShopCard: (state, action) => {
      state.push(action.payload)
    },
  },
})

export default ShopCardSlice.reducer
