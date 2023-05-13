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
  },
})

export const { addSellerProduct } = ProductSlice.actions

export default ProductSlice.reducer
