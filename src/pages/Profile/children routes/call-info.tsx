import { useNavigate } from 'react-router-dom'
import arrowRight from '../assets/arrow-right.png'
import Switch from '@mui/material/Switch'
import { RTLTextField } from '../../../components/common/RtlTextField'
import { Controller, useForm } from 'react-hook-form'
import { callInforMationTypes } from '../../../models/models'
import { useAppDispatch, useAppSelector } from '../../../redux/store/store'
import { addCallInformation } from '../../../redux/store/features/vitrinSlice'
import Swal from 'sweetalert2'

const CallInformation = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<callInforMationTypes>()

  const registeredUser = useAppSelector((state) => state.register)
  const callInformationState = useAppSelector((state) => state.vitrin).callInformation
  const dispatch = useAppDispatch()

  const onSubmit = (data: callInforMationTypes) => {
    Swal.fire({
      title: 'ذخیره شد',
      text: 'اطلاعات تماس شما ذخیره شد',
      icon: 'success',
      confirmButtonText: 'باشه',
    })
    console.log(data)
    dispatch(addCallInformation(data))
    navigate(-1)
  }

  return (
    <div className="flex flex-col items-center w-full h-auto">
      <nav className="flex flex-row justify-end items-center w-screen h-16 border border-b-silver p-2">
        <div className="sm:mr-8 gap-4 flex flex-row justify-center items-center">
          <p>اطلاعات تماس</p>
          <img
            onClick={() => navigate(-1)}
            className="cursor-pointer"
            src={arrowRight}
            alt="back"
          />
        </div>
      </nav>

      <main className="flex flex-col justify-center items-center mt-8 2xs:w-[260px] sm:w-[364px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="border border-silver rounded-lg w-full h-[56px] flex flex-col justify-center items-center">
            <div className="hidden w-[90%] sm:flex flex-row justify-between items-center">
              <Controller
                name="showContactInfo"
                control={control}
                defaultValue={callInformationState.showContactInfo}
                render={({ field }) => (
                  <Switch
                    {...field}
                    id="showContactInfo"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                )}
              />
              <label className="body-md cursor-pointer" htmlFor="showContactInfo">
                نمایش اطلاعات تماس
              </label>
            </div>
            <div className="sm:hidden flex flex-row justify-center items-center">
              <Controller
                name="showContactInfo"
                control={control}
                defaultValue={callInformationState.showContactInfo}
                render={({ field }) => (
                  <Switch
                    {...field}
                    id="showContactInfo"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                )}
              />
              <label className="body-md cursor-pointer" htmlFor="showContactInfo">
                نمایش اطلاعات تماس
              </label>
            </div>
          </div>

          <div className="w-full h-[96px] bg-warning-bg rounded-lg flex justify-center items-center mt-4 p-4">
            <p className="body-xs text-warning">
              در صورتی که فیلدهای زیر را خالی بگذارید,نمایش داده نمیشوند. این اطلاعات تنها برای
              نمایش در ویترین می باشد و ارتباطی با پروفایل شما در کارت ساز نخواهد داشت.
            </p>
          </div>

          <div className="w-full flex flex-col justify-center items-end">
            <div className="w-full mt-8">
              <p className="text-right caption-lg">شماره تلفن</p>
              <RTLTextField
                sx={{ marginTop: '8px', width: '100%' }}
                label="تلفن همراه"
                placeholder="09215487523"
                {...register('phoneNumber', {
                  pattern: {
                    value: /^09\d{9}$/,
                    message: 'شماره نامعتبر',
                  },
                })}
                dir="rtl"
                defaultValue={callInformationState.phoneNumber}
                helperText={errors.phoneNumber?.message}
                error={!!errors.phoneNumber}
                type="number"
              />
            </div>
            <div className="w-full mt-4">
              <p className="text-right caption-lg">ایدی اینستاگرام فروشگاه</p>
              <RTLTextField
                sx={{ marginTop: '8px', width: '100%' }}
                label="ایدی اینستاگرام"
                placeholder="CartsazShop"
                {...register('instagramId')}
                dir="rtl"
                defaultValue={
                  callInformationState.instagramId || registeredUser[0]?.instagram || ''
                }
              />
            </div>
            <div className="w-full mt-4">
              <p className="text-right caption-lg">شماره واتساپ</p>
              <RTLTextField
                sx={{ marginTop: '8px', width: '100%' }}
                label="واتساپ"
                placeholder="09215487523"
                {...register('waNumber', {
                  pattern: {
                    value: /^09\d{9}$/,
                    message: 'شماره نامعتبر',
                  },
                })}
                helperText={errors.waNumber?.message}
                error={!!errors.waNumber}
                dir="rtl"
                defaultValue={callInformationState.waNumber}
              />
            </div>
            <div className="w-full mt-4">
              <p className="text-right caption-lg">ایدی تلگرام</p>
              <RTLTextField
                sx={{ marginTop: '8px', width: '100%' }}
                placeholder="@cartsazShop"
                {...register('telegramId')}
                dir="rtl"
                defaultValue={callInformationState.telegramId}
              />
            </div>
            <div className="w-full mt-4">
              <p className="text-right caption-lg">آدرس فروشگاه</p>
              <RTLTextField
                inputProps={{
                  style: {
                    height: '95px',
                  },
                }}
                sx={{ marginTop: '8px', width: '100%' }}
                placeholder="تهران، میدان آزادی، ..."
                {...register('shopAddress')}
                dir="rtl"
                multiline
                defaultValue={callInformationState.shopAddress || registeredUser[0]?.address || ''}
              />
            </div>
          </div>
          <button className="2xs:w-[260px] sm:w-[350px] h-[56px] bg-primary text-white rounded-lg my-8">
            ذخیره اطلاعات
          </button>
        </form>
      </main>
    </div>
  )
}

export default CallInformation
