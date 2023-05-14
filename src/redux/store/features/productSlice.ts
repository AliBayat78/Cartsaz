import { createSlice } from '@reduxjs/toolkit'
import { ProductCardTypes } from '../../../models/models'

const initialState: ProductCardTypes[] = [
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
    showProduct: true,
    id: Math.random() + Math.random(),
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
    showProduct: true,
    id: Math.random() + Math.random(),
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
    showProduct: true,
    id: Math.random() + Math.random(),
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
    showProduct: true,
    id: Math.random() + Math.random(),
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
    showProduct: true,
    id: Math.random() + Math.random(),
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
    showProduct: true,
    id: Math.random() + Math.random(),
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
    showProduct: true,
    id: Math.random() + Math.random(),
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
    showProduct: true,
    id: Math.random() + Math.random(),
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
    showProduct: true,
    id: Math.random() + Math.random(),
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
    showProduct: true,
    id: Math.random() + Math.random(),
  },
]

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addSellerProduct: (state, action) => {
      return [...state, action.payload]
    },
    updateProductLogo: (state, action) => {
      const { id, logoName, sellerName } = action.payload
      const index = state.findIndex(
        (item) => item.sellerName && item.sellerName === sellerName && item.id === id,
      )
      if (index !== -1) {
        state[index].logo = logoName
      } else return
    },
    updateAllLogoes: (state, action) => {
      const { id, logo } = action.payload
      state.map((p) => {
        if (p.id === id) {
          p.logo = logo
        }
      })
    },
    removeProduct: (state, action) => {
      const { id } = action.payload
      const index = state.findIndex((p) => p.id === id)
      state.splice(index, 1)
    },
  },
})

export const { addSellerProduct, removeProduct, updateProductLogo, updateAllLogoes } =
  ProductSlice.actions

export default ProductSlice.reducer
