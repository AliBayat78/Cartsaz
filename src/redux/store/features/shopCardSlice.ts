import { createSlice } from '@reduxjs/toolkit'
import { ProductShopCardTypes } from '../../../models/models'

const initialState: ProductShopCardTypes[] = []

export const ShopCardSlice = createSlice({
  name: 'shopCard',
  initialState,
  reducers: {
    addInShopCard: (state, action) => {
      state.push(action.payload)
    },
    plusAmountOfBuy: (state, action) => {
      const { id } = action.payload
      const index = state.findIndex((i) => i.id === id)
      state[index].amountOfBuy++
    },
    minusAmountOfBuy: (state, action) => {
      const { id } = action.payload
      const index = state.findIndex((i) => i.id === id)

      if (state[index].amountOfBuy === 1) {
        state.splice(index, 1)
      } else {
        state[index].amountOfBuy--
      }
    },
    resetShopCard: (state, action) => {
      state.splice(0, state.length)
    },
  },
})

export default ShopCardSlice.reducer

export const { addInShopCard, plusAmountOfBuy, minusAmountOfBuy, resetShopCard } =
  ShopCardSlice.actions
