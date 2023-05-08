import { useNavigate } from 'react-router-dom'
import arrowRight from '../../assets/arrow-right.png'
import { RTLTextField } from '../../../../components/common/RtlTextField'
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, Switch } from '@mui/material'
import arrowUp from '../../assets/arrow-up.png'
import { Controller, useForm } from 'react-hook-form'

const options = ['کالا های الکترونیکی', 'لوازم خانگی', 'پوشاک', 'آرایشی و بهداشتی', 'ورزشی']

const AddProduct = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, control } = useForm()

  return (
    <div className="flex flex-col items-center w-full h-auto">
      <nav className="flex flex-row justify-end items-center w-full h-16 border border-b-silver p-2">
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

      <main className="flex flex-col justify-center items-center mt-8 2xs:w-[260px] sm:w-[364px]">
        <div className="w-full flex flex-col justify-center items-end">
          <div className="w-full mt-8">
            <p className="text-right caption-lg">عنوان محصول *</p>
            <RTLTextField
              sx={{ marginTop: '8px', width: '100%' }}
              label="عنوان محصول"
              placeholder="مثال: کیف چرم"
              dir="rtl"
            />
          </div>
          <div className="w-full mt-4">
            <p className="text-right caption-lg">قیمت</p>
            <RTLTextField
              sx={{ marginTop: '8px', width: '100%' }}
              label="قیمت محصول"
              placeholder="مثال : 50,000 تومان"
              dir="rtl"
            />
          </div>
          <div className="w-full mt-4">
            <p className="text-right caption-lg">کد محصول</p>
            <RTLTextField
              sx={{ marginTop: '8px', width: '100%' }}
              label="کد محصول"
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
                // value={shopType}
                // {...register('shopType', { required: true })}
                input={<OutlinedInput label="انتخاب کنید" />}
                // onChange={handleChange}
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
              inputProps={{
                style: {
                  height: '95px',
                },
              }}
              sx={{ marginTop: '8px', width: '100%' }}
              label="توضیحات"
              placeholder="مثال : لورم تکست لورم تکست ..."
              dir="rtl"
              multiline
            />
          </div>

          <div className="w-full mt-4">
            <p className="text-right caption-lg">عکس</p>
            <div className="cursor-pointer relative flex flex-row justify-center items-center w-full h-[48px] rounded-lg bg-pale-blue border border-primary">
              <input
                type="file"
                accept="image/*"
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                //   if (!e.target.files) return
                //   dispatch(addLogoImage(URL.createObjectURL(e.target.files[0])))
                // }}
                className="opacity-0 cursor-pointer absolute top-0 left-0 bottom-0 right-0 w-full h-full"
              />
              <p className="mr-2 button-sm text-primary">آپلود عکس</p>
              <img src={arrowUp} alt="upload" />
            </div>

            <div className="w-[167px] h-[167px]"></div>
          </div>

          <div className="w-full mt-4 h-12 border border-silver rounded-lg flex flex-row justify-between items-center">
            <Controller
              name="showProduct"
              control={control}
              //   defaultValue={callInformationState.showContactInfo}
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
              نمایش اطلاعات تماس
            </label>
          </div>
        </div>
      </main>

      <button className="2xs:w-[260px] sm:w-[350px] h-[56px] bg-primary text-white rounded-lg my-8">
        تایید
      </button>
    </div>
  )
}

export default AddProduct
