import { useNavigate } from 'react-router-dom'
import { RTLTextField } from '../../../components/common/RtlTextField'
import arrowRight from '../assets/arrow-right.png'
import arrowUp from '../assets/arrow-up.png'

const VitrinSetting = () => {
  const navigate = useNavigate()

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
          <div className="cursor-pointer relative flex flex-row justify-center items-center w-[175px] h-[207px] rounded-lg bg-pale-blue border border-primary">
            <input
              type="file"
              className="opacity-0 cursor-pointer absolute top-0 left-0 bottom-0 right-0 w-full h-full"
            />
            <p className="mr-2 button-sm text-primary">آپلود عکس</p>
            <img src={arrowUp} alt="upload" />
          </div>
          <div className="z-10 w-[175px] h-[32px] rounded-b-lg bg-white -mt-8 text-center border border-t-0 border-primary">
            تصویر اصلی (1)
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
            <div className="cursor-pointer border border-silver rounded-lg 2xs:w-[49px] sm:w-[79px] h-[49px] flex justify-center items-center">
              <div className="2xs:w-[39px] sm:w-[69px] h-[39px] rounded-md bg-black"></div>
            </div>
            <div className="cursor-pointer border border-silver rounded-lg 2xs:w-[49px] sm:w-[79px] h-[49px] flex justify-center items-center">
              <div className="2xs:w-[39px] sm:w-[69px] h-[39px] rounded-md bg-orchid"></div>
            </div>
            <div className="cursor-pointer border border-silver rounded-lg 2xs:w-[49px] sm:w-[79px] h-[49px] flex justify-center items-center">
              <div className="2xs:w-[39px] sm:w-[69px] h-[39px] rounded-md bg-scarlet"></div>
            </div>
            <div className="cursor-pointer border border-silver rounded-lg 2xs:w-[49px] sm:w-[79px] h-[49px] flex justify-center items-center">
              <div className="2xs:w-[39px] sm:w-[69px] h-[39px] rounded-md bg-primary"></div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-4 mt-4">
            <div className="cursor-pointer border border-silver rounded-lg 2xs:w-[49px] sm:w-[79px] h-[49px] flex justify-center items-center">
              <div className="2xs:w-[39px] sm:w-[69px] h-[39px] rounded-md bg-royal-purple"></div>
            </div>
            <div className="cursor-pointer border border-silver rounded-lg 2xs:w-[49px] sm:w-[79px] h-[49px] flex justify-center items-center">
              <div className="2xs:w-[39px] sm:w-[69px] h-[39px] rounded-md bg-teal"></div>
            </div>
            <div className="cursor-pointer border border-silver rounded-lg 2xs:w-[49px] sm:w-[79px] h-[49px] flex justify-center items-center">
              <div className="2xs:w-[39px] sm:w-[69px] h-[39px] rounded-md bg-cinnamon"></div>
            </div>
            <div className="cursor-pointer border border-silver rounded-lg 2xs:w-[49px] sm:w-[79px] h-[49px] flex justify-center items-center">
              <div className="2xs:w-[39px] sm:w-[69px] h-[39px] rounded-md bg-vivid-green"></div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col justify-center items-end w-full">
          <p className="caption-lg">توضیح کوتاه فروشگاه</p>
          <RTLTextField
            sx={{ marginTop: '8px', width: '100%' }}
            label="توضیح مختصر"
            placeholder="فروش محصولات دیجیتال و سرگرمی"
            // {...register('phoneNumber')}
            dir="rtl"
          />
        </div>
      </main>

      <button className="2xs:w-[260px] sm:w-[350px] h-[56px] bg-primary text-white rounded-lg my-12">
        ذخیره تنظیمات
      </button>
    </div>
  )
}

export default VitrinSetting
