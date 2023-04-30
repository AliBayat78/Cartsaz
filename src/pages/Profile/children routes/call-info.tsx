import { useNavigate } from 'react-router-dom'
import arrowRight from '../assets/arrow-right.png'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { RTLTextField } from '../../../components/common/RtlTextField'

const CallInformation = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center w-full h-auto">
      <nav className="flex flex-row justify-end items-center w-full h-16 border border-b-silver p-2">
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
        <div className="border border-silver rounded-lg w-full h-[56px] flex flex-col justify-center items-center">
          <div className="hidden sm:flex flex-row justify-center items-center">
            <FormGroup>
              <FormControlLabel
                sx={{ gap: '10rem' }}
                control={<Switch defaultChecked />}
                label="نمایش اطلاعات تماس"
              />
            </FormGroup>
          </div>
          <div className="sm:hidden flex flex-row justify-center items-center">
            <FormGroup>
              <FormControlLabel
                sx={{ gap: '10px' }}
                control={<Switch defaultChecked />}
                label="نمایش تمام محصولات"
              />
            </FormGroup>
          </div>
        </div>

        <div className="w-full h-[96px] bg-warning-bg rounded-lg flex justify-center items-center mt-4 p-4">
          <p className="body-xs text-warning">
            در صورتی که فیلدهای زیر را خالی بگذارید,نمایش داده نمیشوند. این اطلاعات تنها برای نمایش
            در ویترین می باشد و ارتباطی با پروفایل شما در کارت ساز نخواهد داشت.
          </p>
        </div>

        <div className="w-full flex flex-col justify-center items-end">
          <div className="w-full mt-8">
            <p className="text-right caption-lg">شماره تلفن</p>
            <RTLTextField
              sx={{ marginTop: '8px', width: '100%' }}
              label="شماره تلفن"
              placeholder="09215487523"
              // {...register('phoneNumber')}
              dir="rtl"
            />
          </div>
          <div className="w-full mt-4">
            <p className="text-right caption-lg">ایدی اینستاگرام فروشگاه</p>
            <RTLTextField
              sx={{ marginTop: '8px', width: '100%' }}
              label="ایدی اینستاگرام"
              placeholder="CartsazShop"
              // {...register('phoneNumber')}
              dir="rtl"
            />
          </div>
          <div className="w-full mt-4">
            <p className="text-right caption-lg">شماره واتساپ</p>
            <RTLTextField
              sx={{ marginTop: '8px', width: '100%' }}
              label="شماره واتساپ"
              placeholder="09215487523"
              // {...register('phoneNumber')}
              dir="rtl"
            />
          </div>
          <div className="w-full mt-4">
            <p className="text-right caption-lg">ایدی تلگرام</p>
            <RTLTextField
              sx={{ marginTop: '8px', width: '100%' }}
              label="ایدی تلگرام"
              placeholder="@cartsazShop"
              // {...register('phoneNumber')}
              dir="rtl"
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
              label="آدرس فروشگاه"
              placeholder="تهران، میدان آزادی، ..."
              // {...register('phoneNumber')}
              dir="rtl"
              multiline
            />
          </div>
        </div>

        <button className="2xs:w-[260px] sm:w-[350px] h-[56px] bg-primary text-white rounded-lg my-8">
          ذخیره اطلاعات
        </button>
      </main>
    </div>
  )
}

export default CallInformation
