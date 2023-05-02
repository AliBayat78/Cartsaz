import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductCartTypes } from '../../../models/models'

const initialState: ProductCartTypes[] = [
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
  },
  {
    imageSource: 'https://s8.uupload.ir/files/product-image_u86x.png',
    title: 'مانیتور مخصوص بازی',
    description:
      'مدل سامسونگ L213123asdjsadksajdk123123124124124124124123123asdasdasdasdasdasdsadsa',
    price: '256.000',
  },
]

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    findProduct: (state, action: PayloadAction<string>) => {
      if (action.payload === '') {
        return initialState
      }
      return initialState.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase().trim()),
      )
    },
  },
})

export const { findProduct } = ProductSlice.actions

export default ProductSlice.reducer
