import { useNavigate } from 'react-router-dom'
import arrowRight from '../../assets/arrow-right.png'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { RTLTextField } from '../../../../components/common/RtlTextField'
import defaultPicture from '../../assets/default-picture.png'
import { Controller, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../../redux/store/store'
import { VitrinProductsTypes } from '../../../../models/models'
import { useState, useEffect } from 'react'
import { updateShowProduct } from '../../../../redux/store/features/vitrinSlice'

const VitrinProducts = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, control } = useForm<VitrinProductsTypes>()

  const vitrinProductsState = useAppSelector((state) => state.vitrin).vitrinProducts

  const dispatch = useAppDispatch()

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
            <Controller
              name="showAllProducts"
              control={control}
              defaultValue={vitrinProductsState.showAllProducts}
              render={({ field }) => (
                <Switch
                  {...field}
                  id="showAllProducts"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              )}
            />
            <label className="body-md cursor-pointer" htmlFor="showAllProducts">
              نمایش تمام محصولات
            </label>
          </div>
          <div className="sm:hidden flex flex-row justify-center items-center">
            <Controller
              name="showAllProducts"
              control={control}
              defaultValue={vitrinProductsState.showAllProducts}
              render={({ field }) => (
                <Switch
                  {...field}
                  id="showAllProducts"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              )}
            />
            <label className="body-md cursor-pointer" htmlFor="showContactInfo">
              نمایش اطلاعات تماس
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
        />

        <div className="h-[450px] w-full mt-8 overflow-y-auto">
          {vitrinProductsState.products.map((product) => {
            return (
              <div className="h-[82px] my-2 border border-silver rounded-lg flex flex-row justify-between items-center">
                <Switch
                  checked={product.showProduct}
                  onChange={(e) =>
                    dispatch(updateShowProduct({ id: product.id, showProduct: e.target.checked }))
                  }
                />
                <div className="flex flex-row justify-center items-center mr-2">
                  <div className="flex flex-col justify-center items-end mr-4">
                    <h6>{product.title}</h6>
                    <p className="body-xs">قیمت واحد : {product.price} تومان</p>
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
      <button className="2xs:w-[260px] sm:w-[350px] h-[56px] bg-primary text-white rounded-lg my-4">
        تایید
      </button>
    </div>
  )
}

export default VitrinProducts
