import { useNavigate } from 'react-router-dom'
import arrowRight from './Profile/assets/arrow-right.png'
import { RTLTextField } from '../components/common/RtlTextField'
import { useAppSelector } from '../redux/store/store'
import ProductShopCard from '../components/common/ProductShopCard'
import { useEffect, useState } from 'react'
import { ProductShopCardTypes } from '../models/models'

const ShoppingCard = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState<string>('')

  const [totalPrice, setTotalPrice] = useState<number>(0)

  const shopCardState = useAppSelector((state) => state.shopCard)

  const [filteredProducts, setFilteredProducts] = useState<ProductShopCardTypes[]>(shopCardState)


  const searchInProducts = (array: ProductShopCardTypes[]) => {
    if (search === '') {
      return array
    } else {
      return array.filter((p) => p.title.toLowerCase().includes(search.toLowerCase().trim()))
    }
  }

  

  useEffect(() => {

  }, [shopCardState])

  useEffect(() => {
    let result = shopCardState
    result = searchInProducts(result)

    setFilteredProducts(result)
  }, [search, shopCardState])

  return (
    <div className="flex flex-col h-screen w-full items-center relative">
      <nav className="flex flex-row justify-end items-center w-screen h-16 border border-b-silver p-2">
        <div className="sm:mr-8 gap-4 flex flex-row justify-center items-center">
          <p>سبد خرید</p>
          <img
            onClick={() => navigate(-1)}
            className="cursor-pointer"
            src={arrowRight}
            alt="back"
          />
        </div>
      </nav>

      <main className="flex flex-col justify-end items-end mt-8 2xs:w-[260px] sm:w-screen">
        <div className="2xs:w-[260px] sm:w-[364px] mr-8">
          <RTLTextField
            dir="rtl"
            sx={{ marginTop: '16px', width: '100%' }}
            label="جست و جوی محصول مورد نظر ..."
            placeholder="پیرهن مردانه"
            multiline
            disabled={shopCardState.length === 0 ? true : false}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {filteredProducts.length !== 0 ? (
          <div className="flex flex-col w-full items-center">
            <div className="flex flex-row-reverse justify-center flex-wrap xl:justify-start items-center gap-8 2xs:w-[100vw] sm:w-[90vw] my-8">
              {filteredProducts.map((product) => {
                return (
                  <ProductShopCard
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    logo={product.logo}
                    key={product.id}
                    id={product.id}
                    sellerName={product.sellerName}
                    imageSource={product.imageSource}
                    amountOfBuy={product.amountOfBuy}
                  />
                )
              })}
            </div>
          </div>
        ) : (
          <h1 className="w-full h-full flex justify-center items-center mt-8">محصولی یافت نشد</h1>
        )}
      </main>

      <div className="flex flex-col justify-end items-center h-full relative bottom-2 w-[100%] mt-4">
        <p>مبلغ کل : {totalPrice}</p>
        <button className="2xs:w-[260px] sm:w-[350px] h-[56px] bg-primary text-white rounded-lg my-2">
          پرداخت
        </button>
      </div>
    </div>
  )
}

export default ShoppingCard
