import { useEffect, useState } from 'react'
import { findProduct } from '../../../redux/store/features/productSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/store/store'
import ProductCard from '../../common/ProductCard'
import { RTLTextField } from '../../common/RtlTextField'
import searchItem from '../assets/receipt-search.png'

const Products = () => {
  const products = useAppSelector((state) => state.products)
  const [search, setSearch] = useState<string>('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(findProduct(search))
  }, [search])

  return (
    <div className="flex flex-col justify-end items-end w-screen h-auto">
      <div className="2xs:w-[250px] xs:w-[340px] small:w-[360px] mr-4 relative">
        <img className="absolute top-8 left-4" src={searchItem} alt="?" />
        <RTLTextField
          dir="rtl"
          sx={{ marginTop: '16px', width: '100%' }}
          label="جست و جوی محصول مورد نظر ..."
          placeholder="پیرهن مردانه"
          multiline
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <div className="flex flex-row gap-8 2xs:w-[100vw] justify-center items-center sm:w-[90vw] flex-wrap xl:justify-start my-8">
        {products.map((product) => {
          return (
            <ProductCard
              key={Math.random() + Math.random()}
              title={product.title}
              imageSource={product.imageSource}
              description={product.description}
              price={product.price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Products
