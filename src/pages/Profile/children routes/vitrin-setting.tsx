import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { RTLTextField } from '../../../components/common/RtlTextField'
import {
  addLogoImage,
  addShortDescription,
  addVitrinColor,
} from '../../../redux/store/features/vitrinSlice'
import { useAppSelector } from '../../../redux/store/store'
import arrowRight from '../assets/arrow-right.png'
import arrowUp from '../assets/arrow-up.png'

const VitrinSetting = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const vitrinSettingProperties = useAppSelector((state) => state.vitrin)

  const colorCode = vitrinSettingProperties.vitrinSetting.VitrinColor.colorCode

  return (
    <div className="flex flex-col items-center w-full h-auto">
      <nav className="flex flex-row justify-end items-center w-full h-16 border border-b-silver p-2">
        <div className="sm:mr-8 gap-4 flex flex-row justify-center items-center">
          <p>تنظیمات کلی ویترین</p>
          <img
            onClick={() => navigate(-1)}
            className="cursor-pointer"
            src={arrowRight}
            alt="back"
          />
        </div>
      </nav>

      <main className="flex flex-col justify-center items-center mt-8 2xs:w-[260px] sm:w-[364px]">
        <li className="body-xs text-right">
          آدرس ویترین شما همان آیدی پیج اینستاگرام در پروفایل میباشد.
        </li>
        <div className="w-full mt-4 border border-dashed border-silver"></div>

        <div className="w-full flex flex-col justify-center items-end mt-4">
          <p className="caption-lg">تصویر لوگو</p>
          <p className="body-xs">تصویر لوگو حتما باید مربع باشد.</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-4">
          {vitrinSettingProperties.vitrinSetting.LogoImage === '' ? (
            <div className="cursor-pointer relative flex flex-row justify-center items-center w-[175px] h-[207px] rounded-lg bg-pale-blue border border-primary">
              <input
                type="file"
                accept="image/*"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (!e.target.files) return
                  dispatch(addLogoImage(URL.createObjectURL(e.target.files[0])))
                }}
                className="opacity-0 cursor-pointer absolute top-0 left-0 bottom-0 right-0 w-full h-full"
              />
              <p className="mr-2 button-sm text-primary">آپلود عکس</p>
              <img src={arrowUp} alt="upload" />
            </div>
          ) : (
            <div className="relative flex flex-row justify-center items-center w-[175px] h-[207px] rounded-lg bg-pale-blue border border-primary">
              <img
                className="w-full h-full rounded-lg"
                src={vitrinSettingProperties.vitrinSetting.LogoImage}
                alt="your-Logo"
              />
            </div>
          )}
          <div className="z-10 w-[175px] h-[32px] rounded-b-lg bg-white -mt-8 text-center border border-t-0 border-primary">
            تصویر اصلی
          </div>
        </div>

        <div className="w-full mt-8 border border-dashed border-silver"></div>

        <div className="w-full flex flex-col justify-center items-end mt-4">
          <p className="caption-lg">رنگ ویترین</p>
          <p className="body-xs">
            با توجه به رنگ لوگو خود میتوانید از بین رنگ های زیر انتخاب کنید.
          </p>
        </div>

        <div className="w-full flex flex-col justify-center items-center mt-4">
          <div className="flex flex-row justify-center items-center gap-4">
            <div
              onClick={() => dispatch(addVitrinColor({ colorName: 'black', colorCode: '#000000' }))}
              className="cursor-pointer border border-silver rounded-lg 2xs:w-[49px] sm:w-[79px] h-[49px] flex justify-center items-center"
            >
              <div className="2xs:w-[39px] sm:w-[69px] h-[39px] rounded-md bg-black flex justify-center items-center">
                {colorCode === '#000000' ? (
                  <div className="bg-white w-[20px] h-[20px] rounded-full flex justify-center items-center">
                    <span className="text-black text-lg">&#10003;</span>
                  </div>
                ) : null}
              </div>
            </div>
            <div
              onClick={() =>
                dispatch(addVitrinColor({ colorName: 'orchid', colorCode: '#D21DA0' }))
              }
              className="cursor-pointer border border-silver rounded-lg 2xs:w-[49px] sm:w-[79px] h-[49px] flex justify-center items-center"
            >
              <div className="2xs:w-[39px] sm:w-[69px] h-[39px] rounded-md bg-orchid flex justify-center items-center">
                {colorCode === '#D21DA0' ? (
                  <div className="bg-white w-[20px] h-[20px] rounded-full flex justify-center items-center">
                    <span className="text-orchid text-lg">&#10003;</span>
                  </div>
                ) : null}
              </div>
            </div>
            <div
              onClick={() =>
                dispatch(addVitrinColor({ colorName: 'scarlet', colorCode: '#D21D1D' }))
              }
              className="cursor-pointer border border-silver rounded-lg 2xs:w-[49px] sm:w-[79px] h-[49px] flex justify-center items-center"
            >
              <div className="2xs:w-[39px] sm:w-[69px] h-[39px] rounded-md bg-scarlet flex justify-center items-center">
                {colorCode === '#D21D1D' ? (
                  <div className="bg-white w-[20px] h-[20px] rounded-full flex justify-center items-center">
                    <span className="text-scarlet text-lg">&#10003;</span>
                  </div>
                ) : null}
              </div>
            </div>
            <div
              onClick={() =>
                dispatch(addVitrinColor({ colorName: 'primary', colorCode: '#0182FE' }))
              }
              className="cursor-pointer border border-silver rounded-lg 2xs:w-[49px] sm:w-[79px] h-[49px] flex justify-center items-center"
            >
              <div className="2xs:w-[39px] sm:w-[69px] h-[39px] rounded-md bg-primary flex justify-center items-center">
                {colorCode === '#0182FE' ? (
                  <div className="bg-white w-[20px] h-[20px] rounded-full flex justify-center items-center">
                    <span className="text-primary text-lg">&#10003;</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-4 mt-4">
            <div
              onClick={() =>
                dispatch(addVitrinColor({ colorName: 'royal-purple', colorCode: '#6D1DD2' }))
              }
              className="cursor-pointer border border-silver rounded-lg 2xs:w-[49px] sm:w-[79px] h-[49px] flex justify-center items-center"
            >
              <div className="2xs:w-[39px] sm:w-[69px] h-[39px] rounded-md bg-royal-purple flex justify-center items-center">
                {colorCode === '#6D1DD2' ? (
                  <div className="bg-white w-[20px] h-[20px] rounded-full flex justify-center items-center">
                    <span className="text-royal-purple text-lg">&#10003;</span>
                  </div>
                ) : null}
              </div>
            </div>
            <div
              onClick={() => dispatch(addVitrinColor({ colorName: 'teal', colorCode: '#1D767B' }))}
              className="cursor-pointer border border-silver rounded-lg 2xs:w-[49px] sm:w-[79px] h-[49px] flex justify-center items-center"
            >
              <div className="2xs:w-[39px] sm:w-[69px] h-[39px] rounded-md bg-teal flex justify-center items-center">
                {colorCode === '#1D767B' ? (
                  <div className="bg-white w-[20px] h-[20px] rounded-full flex justify-center items-center">
                    <span className="text-teal text-lg">&#10003;</span>
                  </div>
                ) : null}
              </div>
            </div>
            <div
              onClick={() =>
                dispatch(addVitrinColor({ colorName: 'cinnamon', colorCode: '#AF6E21' }))
              }
              className="cursor-pointer border border-silver rounded-lg 2xs:w-[49px] sm:w-[79px] h-[49px] flex justify-center items-center"
            >
              <div className="2xs:w-[39px] sm:w-[69px] h-[39px] rounded-md bg-cinnamon flex justify-center items-center">
                {colorCode === '#AF6E21' ? (
                  <div className="bg-white w-[20px] h-[20px] rounded-full flex justify-center items-center">
                    <span className="text-cinnamon text-lg">&#10003;</span>
                  </div>
                ) : null}
              </div>
            </div>
            <div
              onClick={() =>
                dispatch(addVitrinColor({ colorName: 'vivid-green', colorCode: '#4D842B' }))
              }
              className="cursor-pointer border border-silver rounded-lg 2xs:w-[49px] sm:w-[79px] h-[49px] flex justify-center items-center"
            >
              <div className="2xs:w-[39px] sm:w-[69px] h-[39px] rounded-md bg-vivid-green flex justify-center items-center">
                {colorCode === '#4D842B' ? (
                  <div className="bg-white w-[20px] h-[20px] rounded-full flex justify-center items-center">
                    <span className="text-vivid-green text-lg">&#10003;</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col justify-center items-end w-full">
          <p className="caption-lg">توضیح کوتاه فروشگاه</p>
          <RTLTextField
            sx={{ marginTop: '8px', width: '100%' }}
            label="توضیح مختصر"
            placeholder="فروش محصولات دیجیتال و سرگرمی"
            dir="rtl"
            onChange={(e) => dispatch(addShortDescription(e.target.value))}
          />
        </div>
      </main>

      <button
        onClick={() =>
          Swal.fire({
            title: 'ذخیره شد',
            text: 'تنظیمات شما با موفقیت ذخیره شد',
            icon: 'success',
            confirmButtonText: 'باشه',
          })
        }
        className="2xs:w-[260px] sm:w-[350px] h-[56px] bg-primary text-white rounded-lg my-12"
      >
        ذخیره تنظیمات
      </button>
    </div>
  )
}

export default VitrinSetting
