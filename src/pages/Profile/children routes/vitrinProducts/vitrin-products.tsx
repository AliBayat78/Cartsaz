import { useNavigate } from 'react-router-dom'
import arrowRight from '../../assets/arrow-right.png'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { RTLTextField } from '../../../../components/common/RtlTextField'
import defaultPicture from '../../assets/default-picture.png'
import { Controller, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../../redux/store/store'
import { SellerProductCardType, VitrinProductsTypes } from '../../../../models/models'
import { useState, useEffect } from 'react'
import {
  showAllProductsDispatcher,
  switchEveryShowProduct,
  updateShowProduct,
} from '../../../../redux/store/features/vitrinSlice'
import Swal from 'sweetalert2'

const VitrinProducts = () => {
  const navigate = useNavigate()

  const vitrinProductsState = useAppSelector((state) => state.vitrin).vitrinProducts

  const [filteredProducts, setFilteredProducts] = useState<SellerProductCardType[]>(
    vitrinProductsState.products,
  )
  const [search, setSearch] = useState<string>('')
  const [showAll, setShowAll] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const filterSearchTitle = (array: SellerProductCardType[]) => {
    if (search === '') {
      return array
    } else {
      return array.filter((p) => p.title.toLowerCase().includes(search))
    }
  }

  const filterShowAllProducts = (array: SellerProductCardType[]) => {
    if (showAll) {
      return array.map((p) => ({ ...p, showProduct: true }))
    } else {
      return array
    }
  }

  useEffect(() => {
    let result = vitrinProductsState.products
    result = filterSearchTitle(result)
    result = filterShowAllProducts(result)

    setFilteredProducts(result)
  }, [search, vitrinProductsState.products, vitrinProductsState.showAllProducts])

  const handleSubmit = () => {
    dispatch(showAllProductsDispatcher(showAll))

    Swal.fire({
      title: 'ذخیره شد',
      text: 'تغییرات اعمال شده ذخیره شد',
      icon: 'success',
      confirmButtonText: 'ادامه',
    })

    if (showAll) {
      dispatch(switchEveryShowProduct(true))
      navigate(-1)
    } else {
      navigate(-1)
    }
  }

  return (
    <div className="flex flex-col items-center w-full h-auto">
      <nav className="flex flex-row justify-end items-center w-screen h-16 border border-b-silver p-2">
        <div className="sm:mr-8 gap-4 flex flex-row justify-center items-center">
          <p>محصولات ویترین</p>
          <img
            onClick={() => navigate(-1)}
            className="cursor-pointer"
            src={arrowRight}
            alt="back"
          />
        </div>
      </nav>
      <main className="flex flex-col justify-center items-center mt-8 2xs:w-[260px] sm:w-[364px]">
        <div className="border border-silver rounded-lg w-full h-[107px] flex flex-col justify-center items-center">
          <div className="hidden w-[90%] sm:flex flex-row justify-between items-center">
            <Switch
              id="showAllProducts"
              checked={showAll}
              onChange={(e) => setShowAll(e.target.checked)}
            />

            <label className="body-md cursor-pointer" htmlFor="showAllProducts">
              نمایش تمام محصولات
            </label>
          </div>
          <div className="sm:hidden flex flex-row justify-center items-center">
            <Switch
              id="showAllProducts"
              checked={showAll}
              onChange={(e) => setShowAll(e.target.checked)}
            />

            <label className="body-md cursor-pointer" htmlFor="showAllProducts">
              نمایش تمام محصولات
            </label>
          </div>
          <p className="body-xs mr-2">
            در صورت انتخاب این گزینه تمام محصولات وارد شده در ویترین نیز قابل نمایش خواهند بود.
          </p>
        </div>

        <RTLTextField
          dir="rtl"
          sx={{ marginTop: '32px', width: '100%' }}
          label="جستجو محصول"
          placeholder="روغن زیتون"
          value={search}
          onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
        />

        <div className="h-[450px] w-full mt-8 overflow-y-auto">
          {filteredProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="h-[82px] my-2 border border-silver rounded-lg flex flex-row justify-between items-center"
              >
                <Switch
                  checked={showAll ? true : product.showProduct}
                  onChange={(e) =>
                    dispatch(updateShowProduct({ id: product.id, showProduct: e.target.checked }))
                  }
                />
                <div className="flex flex-row justify-center items-center mr-2">
                  <div className="flex flex-col justify-center items-end mr-4">
                    <h6 className="w-[200px]">
                      {product.title.length > 10
                        ? product.title.substring(0, 10) + '...'
                        : product.title}
                    </h6>
                    <p className="body-xs">
                      قیمت واحد :{' '}
                      {product.price.length > 10
                        ? '...' + product.price.substring(0, 10)
                        : product.price}{' '}
                      تومان
                    </p>
                  </div>
                  <img className="w-[66px] h-[66px]" src={product.imageSource} alt="picture" />
                </div>
              </div>
            )
          })}
        </div>
      </main>
      <button
        onClick={() => navigate('./addProduct')}
        className="2xs:w-[260px] sm:w-[350px] h-[56px] bg-royal-purple text-white rounded-lg mt-2"
      >
        اضافه کردن محصول
      </button>
      <button
        onClick={() => handleSubmit()}
        className="2xs:w-[260px] sm:w-[350px] h-[56px] bg-primary text-white rounded-lg my-4"
      >
        تایید
      </button>
    </div>
  )
}

export default VitrinProducts
