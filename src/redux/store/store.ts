import { VitrinSlice } from './features/vitrinSlice'
import { ProductSlice } from './features/productSlice'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux/es/types'
import { useSelector } from 'react-redux/es/exports'

export const store = configureStore({
  reducer: {
    products: ProductSlice.reducer,
    vitrin: VitrinSlice.reducer,
  },
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
