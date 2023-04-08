import { Button, TextField, SelectChangeEvent } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState } from 'react'
import { RegisterInputs } from '../models/models'
import { useForm } from 'react-hook-form'
import { RTLTextField } from '../components/common/RtlTextField'

const options = ['کالا های الکترونیکی', 'لوازم خانگی', 'پوشاک', 'آرایشی و بهداشتی', 'ورزشی']

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>()

  const [shopType, setShopType] = useState('')

  const onSubmit = (data: RegisterInputs) => {
    console.log(data)
  }

  const handleChange = (e: SelectChangeEvent<string>) => {
    setShopType(e.target.value)
  }

  return (
    <div className="w-full h-auto flex flex-col items-center">
      <nav className="h-20 w-full flex justify-end items-center px-20 border border-b-silver">
        <p className="caption-lg">ثبت نام فروشنده</p>
      </nav>
      <div className="2xs:w-[90vw] sm:w-[400px] mt-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <p className="text-right caption-lg">نام و نام خانوادگی *</p>
            <RTLTextField
              sx={{ marginTop: '8px', width: '100%' }}
              label="نام و نام خانوادگی"
              placeholder="علی بیات"
              multiline
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
              {...register('fullName', { required: true })}
              dir="rtl"
            />
          </div>
          <div className="w-full">
            <p className="text-right caption-lg">نام کاربری *</p>
            <RTLTextField
              sx={{ marginTop: '8px', width: '100%' }}
              label="نام کاربری"
              placeholder="علی بیات"
              multiline
              dir="rtl"
              error={!!errors.User?.Username}
              {...register('User.Username', { required: true })}
            />
          </div>
          <div className="w-full">
            <p className="text-right caption-lg">رمز عبور *</p>
            <RTLTextField
              sx={{ marginTop: '8px', width: '100%' }}
              label="رمز عبور"
              type="password"
              error={!!errors.User?.Password}
              dir="rtl"
              {...register('User.Password', {
                required: true,
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                  message:
                    'رمز عبور باید شامل حداقل یک حرف بزرگ، یک عدد و حتما بیشتر از 8 حرف باشد.',
                },
              })}
            />
            {errors.User?.Password && (
              <p className="text-error mt-2 2xs:mb-10 md:mb-2 body-sm">
                {errors.User?.Password.message}
              </p>
            )}
          </div>
          <div className="w-full mt-3">
            <p className="text-right caption-lg">ایدی پیج اینستاگرام فروشگاه *</p>
            <RTLTextField
              dir="rtl"
              sx={{ marginTop: '8px', width: '100%' }}
              id="demo-helper-text-aligned"
              label="ایدی اینستاگرام"
              placeholder="Instagram.com/alibayatt78"
              multiline
              {...register('instagram', { required: true })}
              error={!!errors.instagram}
              helperText={errors.instagram?.message}
            />
          </div>
          <div className="w-full mt-3">
            <p className="text-right caption-lg">نام فروشگاه *</p>
            <RTLTextField
              dir="rtl"
              sx={{ marginTop: '8px', width: '100%' }}
              id="demo-helper-text-aligned"
              label="نام فروشگاه"
              placeholder="مثال: موبایلینو"
              multiline
              {...register('shopName', { required: true })}
              error={!!errors.shopName}
              helperText={errors.shopName?.message}
            />
          </div>

          <div className="w-full mt-3">
            <p className="text-right caption-lg">نوع فعالیت فروشگاه *</p>
            <FormControl sx={{ marginTop: '8px', width: '100%' }}>
              <InputLabel id="demo-multiple-name-label">Name</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={shopType}
                {...register('shopType', { required: true })}
                input={<OutlinedInput label="Name" />}
                onChange={handleChange}
              >
                {options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {errors.shopType && (
              <p className="text-error mt-2 2xs:mb-10 md:mb-2 body-sm">
                لطفا یک مورد را انتخاب کنید
              </p>
            )}
          </div>
          <div className="w-full mt-3">
            <p className="text-right caption-lg">ایمیل (اختیاری)</p>
            <RTLTextField
              dir="rtl"
              sx={{ marginTop: '8px', width: '100%' }}
              id="demo-helper-text-aligned"
              label="ایمیل"
              placeholder="مثال: Cartsaz@gmail.com"
              multiline
              {...register('email', { required: false })}
            />
          </div>
          <div className="w-full mt-3">
            <p className="text-right caption-lg">آدرس فرستنده (اختیاری)</p>
            <RTLTextField
              dir="rtl"
              sx={{ marginTop: '8px', width: '100%' }}
              id="demo-helper-text-aligned"
              label="آدرس فرستنده"
              placeholder="مثال: تهران، میدان آزادی پلاک 2"
              multiline
              {...register('address', { required: false })}
            />
          </div>
          <div className="w-full mt-3">
            <p className="text-right caption-lg"> کد پستی فرستنده (اختیاری)</p>
            <RTLTextField
              dir="rtl"
              sx={{ marginTop: '8px', width: '100%' }}
              id="demo-helper-text-aligned"
              label="کد پستی فرستنده"
              placeholder="مثال: 71236481"
              multiline
              {...register('postCode', { required: false })}
            />
          </div>
          <div className="mt-2 w-full h-[90px] bg-pale-silver flex flex-col items-end justify-center p-4">
            <p className="body-xs">
              آدرس فرستنده و کد پستی فرستنده در خروجی برگه ارسال از سبد های خرید درج میشود.
            </p>
            <p className="body-xs">بعد نیز میتوانید این بخش را اصلاح کنید.</p>
          </div>
          <Button
            type="submit"
            sx={{ width: '100%', height: '56px', marginTop: '32px', marginBottom: '32px' }}
            variant="contained"
          >
            تکمیل ثبت نام
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Register
