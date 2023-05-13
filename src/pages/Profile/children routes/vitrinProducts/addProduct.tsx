import { useNavigate } from 'react-router-dom'
import arrowRight from '../../assets/arrow-right.png'
import { RTLTextField } from '../../../../components/common/RtlTextField'
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, Switch } from '@mui/material'
import arrowUp from '../../assets/arrow-up.png'
import { Controller, useForm } from 'react-hook-form'
import { ProductCardTypes } from '../../../../models/models'
import { useAppDispatch } from '../../../../redux/store/store'
import { useEffect, useState } from 'react'
import { addVitrinProducts } from '../../../../redux/store/features/vitrinSlice'
import Swal from 'sweetalert2'

const options = ['کالا های الکترونیکی', 'لوازم خانگی', 'پوشاک', 'آرایشی و بهداشتی', 'ورزشی']

const AddProduct = () => {
  const navigate = useNavigate()
  const [categoryValue, setCategoryValue] = useState('')
  const [imagePreview, setImagePreview] = useState(
    'https://s8.uupload.ir/files/default-picture_zsqf.png',
  )

  const dispatch = useAppDispatch()

  const { register, handleSubmit, control, reset } = useForm<ProductCardTypes>()

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })

  const onSubmit = (data: ProductCardTypes) => {
    const id = Math.random() + Math.random()
    const productData = { ...data, id }
    dispatch(addVitrinProducts(productData))
    Toast.fire({
      icon: 'success',
      title: 'محصول اضافه شد',
      customClass: {
        container: 'mt-16 mr-4',
      },
    })
    setImagePreview('https://s8.uupload.ir/files/default-picture_zsqf.png')
    reset()
  }

  return (
    <div className="flex flex-col items-center w-full h-auto">
      <nav className="w-screen flex flex-row justify-end items-center h-16 border border-b-silver p-2">
        <div className="sm:mr-8 gap-4 flex flex-row justify-center items-center">
          <p>افزودن محصول جدید</p>
          <img
            onClick={() => navigate(-1)}
            className="cursor-pointer"
            src={arrowRight}
            alt="back"
          />
        </div>
      </nav>
      <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
        <main className="flex flex-col justify-center items-center mt-8 2xs:w-[260px] sm:w-[364px]">
          <div className="w-full flex flex-col justify-center items-end">
            <div className="w-full mt-8">
              <p className="text-right caption-lg">عنوان محصول *</p>
              <RTLTextField
                {...register('title', { required: 'نام محصول را وارد کنید.' })}
                sx={{ marginTop: '8px', width: '100%' }}
                label="نام محصول"
                placeholder="مثال: کیف چرم"
                dir="rtl"
              />
            </div>
            <div className="w-full mt-4">
              <p className="text-right caption-lg">قیمت *</p>
              <RTLTextField
                {...register('price', { required: 'قیمت محصول را وارد کنید.' })}
                sx={{ marginTop: '8px', width: '100%' }}
                label="قیمت به تومان"
                placeholder="مثال : 50,000 تومان"
                dir="rtl"
              />
            </div>
            <div className="w-full mt-4">
              <p className="text-right caption-lg">کد محصول</p>
              <RTLTextField
                {...register('productCode')}
                sx={{ marginTop: '8px', width: '100%' }}
                label="شناسه"
                placeholder="مثال : 231231241"
                dir="rtl"
              />
            </div>
            <div className="w-full mt-4">
              <p className="text-right caption-lg">دسته بندی</p>
              <FormControl sx={{ marginTop: '8px', width: '100%' }}>
                <InputLabel id="select">انتخاب کنید</InputLabel>
                <Select
                  labelId="select-label"
                  id="select"
                  {...register('category')}
                  input={<OutlinedInput label="انتخاب کنید" />}
                  value={categoryValue}
                  onChange={(e) => setCategoryValue(e.target.value)}
                >
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="w-full mt-4">
              <p className="text-right caption-lg">توضیحات</p>
              <RTLTextField
                {...register('description')}
                inputProps={{
                  style: {
                    height: '95px',
                  },
                }}
                sx={{ marginTop: '8px', width: '100%' }}
                label="درباره محصول"
                placeholder="مثال : لورم تکست لورم تکست ..."
                dir="rtl"
                multiline
              />
            </div>

            <div className="w-full mt-4">
              <p className="text-right caption-lg">عکس</p>
              <div className="cursor-pointer relative flex flex-row justify-center items-center w-full h-[48px] rounded-lg bg-pale-blue border border-primary">
                <Controller
                  name="imageSource"
                  control={control}
                  defaultValue={imagePreview}
                  render={({ field }) => (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (!e.target.files) return
                        else {
                          field.onChange(URL.createObjectURL(e.target.files[0]))
                          setImagePreview(URL.createObjectURL(e.target.files[0]))
                        }
                      }}
                      className="opacity-0 cursor-pointer absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                    />
                  )}
                />
                <p className="mr-2 button-sm text-primary">آپلود عکس</p>
                <img src={arrowUp} alt="upload" />
              </div>

              <div className="w-full rounded-lg flex justify-center items-center">
                <img
                  className="w-[167px] h-[167px] rounded-lg mt-2"
                  src={imagePreview}
                  alt="product-image"
                />
              </div>
            </div>

            <div className="w-full mt-4 h-12 border border-silver rounded-lg flex flex-row justify-between items-center">
              <Controller
                name="showProduct"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Switch
                    {...field}
                    id="showProduct"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                )}
              />
              <label className="body-md cursor-pointer mr-2" htmlFor="showProduct">
                نمایش محصول
              </label>
            </div>
          </div>
        </main>

        <button
          type="submit"
          className="w-[100px] 2xs:w-[260px] sm:w-[350px] h-[56px] bg-primary text-white rounded-lg my-8"
        >
          تایید
        </button>
      </form>
    </div>
  )
}

export default AddProduct
