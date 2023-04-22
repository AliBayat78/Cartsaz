import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ProductCard from '../../../components/common/ProductCard'
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
]

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

export default ProductSlice.reducer
