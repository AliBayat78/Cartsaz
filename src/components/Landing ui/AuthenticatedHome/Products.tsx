import { useEffect, useState } from 'react'
import { ProductCardTypes } from '../../../models/models'
import { useAppDispatch, useAppSelector } from '../../../redux/store/store'
import ProductCard from '../../common/ProductCard'
import { RTLTextField } from '../../common/RtlTextField'
import searchItem from '../assets/receipt-search.png'

const Products = () => {
  const products = useAppSelector((state) => state.products)
  const [search, setSearch] = useState<string>('')
  const [newProducts, setNewProducts] = useState<ProductCardTypes[]>(products)

  useEffect(() => {
    searchProducts()
  }, [search])

  const searchProducts = () => {
    if (search === '') {
      setNewProducts(products)
    } else {
      let updatedProducts = newProducts.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase().trim()),
      )
      setNewProducts(updatedProducts)
    }
  }

  return (
    <div className="flex flex-col justify-end items-end w-screen h-auto">
      <div className="2xs:w-[250px] xs:w-[340px] small:w-[360px] relative mr-4">
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
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-row-reverse justify-center flex-wrap xl:justify-start items-center gap-8 2xs:w-[100vw] sm:w-[90vw] my-8">
          {newProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                title={product.title}
                imageSource={product.imageSource}
                description={product.description}
                price={product.price}
                showProduct={product.showProduct}
                id={product.id}
                logo={product.logo}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Products
