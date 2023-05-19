import brushedLine from '../../assets/logoes & images/brushed-line.png'
import { BasicCard } from '../common/Card'
import displayFrame from './assets/display-mode-Frame.png'
import displayPhone from './assets/display-mode-phone.png'
import buying from './assets/buying.png'
import productSubmit from './assets/product-submit.png'
import profileSubmit from './assets/profile-submit.png'
import timeManagement from './assets/time-management.png'
import registerBanner from './assets/register-banner.png'
import registerBannerMobile from './assets/register-banner-mobile.png'
import messageEdit from './assets/message-edit.png'
import videoCircle from './assets/video-circle.png'
import arrowDown from './assets/arrow-down.png'
import video from './assets/bunnyvideo.mp4'

const Main = () => {
  return (
    <div className="mt-44 flex flex-col justify-center items-center">
      <h1 className="text-center sm:w-[448px] xl:w-[700px] p-4">
        سامانه مدیریت <span className="text-primary">هوشمند</span> سفارش های اینترنتی
      </h1>

      <div className="flex flex-col justify-center items-center">
        <video
          className="hidden sm:w-[620px] h-[385px] sm:flex rounded-2xl mt-11"
          controls
          preload="auto"
        >
          <source src={video} type="video/mp4" />
        </video>

        <button className="flex flex-row justify-center items-center py-4 px-10 gap-2 bg-primary mt-4 rounded-[32px] sm:hidden">
          <span className="overline-lg text-white w-full">مشاهده ویدئو معرفی</span>
          <img src={videoCircle} className="w-[24px] h-24px]" />
        </button>
        <p
          className="body-sm w-[85vw] sm:body-md flex justify-center items-center mt-10 text-center"
          style={{ direction: 'rtl' }}
        >
          کارت ساز آمده تا دیگر نیازی به یادداشت سفارش های خود در دفتر و یا سررسید نباشید.به راحتی
          سفارشات خود را مدیریت کنید و آن ها را تعیین وضعیت کنید.حتی به راحتی برگه ارسال پرینت کنید
          و آن را اختصاصی استفاده کنید.
        </p>
        <img src={arrowDown} className="mt-8" />
      </div>

      {/* brushed line */}
      <img className="brushedLine" src={brushedLine} />

      {/* display mode */}
      <div className="flex flex-col justify-center items-center">
        <div className="mt-10 bg-blush sm:bg-white flex flex-row justify-center items-center text-center px-4 py-[2px] gap-2 rounded-[80px] border border-t-0 border-b-silver">
          <p className="text-secondary w-full body-sm">حالت نمایش</p>
        </div>
        <h3 className="mt-6 text-center sm:w-[452px] xl:w-[700px]">سیستمی کاملا تحت وب و آنلاین</h3>
        <p className="body-md w-[85vw] mt-2 text-center" style={{ direction: 'rtl' }}>
          سیستم کارت ساز کاملا تحت وب اجرا شده است و نیازی به هیچ سخت افزار خاصی برای دیتاهای خود
          ندارید. به راحتی مشتریان را مدیریت کنید و سفارشات خود را به موقع ارسال و آن ها را جمع آوری
          کنید.
        </p>
        <div className="flex flex-row relative">
          <img
            className="mt-11 absolute bottom-2 max-w-[105px] sm:w-[233px] 2xs:w-[90px] 2xs:h-[165px]"
            src={displayPhone}
          />
          <img className="mt-11  max-w-[348px] sm:w-[810px] 2xs:w-[280px]" src={displayFrame} />
        </div>
      </div>

      {/* features */}
      <div className="flex flex-col justify-center items-center text-center">
        <div className="mt-10 bg-blush sm:bg-white flex flex-row justify-center items-center text-center px-4 py-[2px] gap-2 rounded-[80px] border border-t-0 border-b-silver">
          <p className="text-secondary body-sm flex justify-center items-center">امکانات</p>
        </div>
        <h3 className="mt-2 sm:w-[492px] lg:w-[520px]">جدید ترین مدل مدیریت سبد خرید ها</h3>
        <p className="body-md w-[85vw] mt-2 text-center" style={{ direction: 'rtl' }}>
          بیش از 100 ها فروشگاه سبد خرید های خود را در کارت ساز با امکانات متفاوت این سامانه مدیریت
          میکنند.
        </p>
        <div className="mt-10 h-auto flex flex-col items-center lg:flex-row lg:w-[1000px] xl:w-[1224px] gap-6">
          <BasicCard
            src={productSubmit}
            title={'ثبت محصول'}
            description={
              'قبل از هر چیزی محصولات خود را ثبت کنید و برای آن ها عکس بگذارید تا به آسانی در سبد خرید درج شود.'
            }
          />
          <BasicCard
            src={timeManagement}
            title={'مدیریت زمان'}
            description={
              'قبل از هر چیزی محصولات خود را ثبت کنید و برای آن ها عکس بگذارید تا به آسانی در سبد خرید درج شود.'
            }
          />
          <BasicCard
            src={profileSubmit}
            title={'ثبت پروفایل'}
            description={
              'قبل از هر چیزی محصولات خود را ثبت کنید و برای آن ها عکس بگذارید تا به آسانی در سبد خرید درج شود.'
            }
          />
          <BasicCard
            src={buying}
            title={'ایجاد سبد خرید اختصاصی'}
            description={
              'قبل از هر چیزی محصولات خود را ثبت کنید و برای آن ها عکس بگذارید تا به آسانی در سبد خرید درج شود.'
            }
          />
        </div>
      </div>

      {/* register-banner */}
      <div className="mt-20 relative">
        <img className="hidden sm:flex w-screen h-[259px]" src={registerBanner} />
        <img className="sm:hidden w-screen h-[259px]" src={registerBannerMobile} />
        <div className="absolute z-1 top-0 right-[50%] translate-x-[50%] flex flex-col justify-center items-center">
          <h1
            style={{ direction: 'rtl' }}
            className="xs:mt-6 mt-10 text-center text-white w-[270px] sm:w-[450px] xl:w-[700px]"
          >
            هم اکنون ثبت نام کنید!
          </h1>
          <p className="mt-2 body-md text-white" style={{ direction: 'rtl' }}>
            ثبت نام در کارت ساز رایگان است.همین الان ثبت نام کنید و کارت ساز را تست کنید.
          </p>
          <button className="bg-secondary rounded-[32px] py-4 px-8 flex flex-row justify-center items-center 2xs:mt-4 xs:mt-2 gap-2">
            <span className="overline-lg text-white">ثبت نام رایگان</span>
            <img src={messageEdit} />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-start items-end mt-10 2xs:mr-4">
        <h4>
          <span className="text-primary ml-2">کارت ساز</span>
          چیست ؟
        </h4>
        <p className="mt-4 w-[85vw] body-md">
          کارت ساز یک سیستم نوین است که به شما اجازه میدهد برای مشتریان خود سبد خرید(cart) اختصاصی
          ایجاد کنید و سپس با ارسال لینک از آن ها بخواهید که سبد خرید خود را کامل کنند. در این حالت
          شما دیگر نیازی به یادداشت موارد خاسته شده ندارید و به راحتی میتوانید سفارشات خود را ثبت
          کنید.کارت ساز آمده تا زمان شما مدیریت شود , مشتریان خود را رهگیری کنید , سفارشات را طبقه
          بندی کنید.کارت ساز در ابتدای مسیر خود می باشد و قصدش کمک به کسب و کار های نوپا و کوچک بر
          بستر شبکه های اجتماعی همانند اینستاگرام,تلگرام و واتساپ می باشد.
        </p>
      </div>
    </div>
  )
}
export default Main
