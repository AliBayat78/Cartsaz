import brushedLine from '../../assets/logoes & images/brushed-line.png'
import { BasicCard } from '../common/Card'
import displayFrame from './assets/display-mode-Frame.png'
import displayPhone from './assets/display-mode-phone.png'
import cartImage from '../../assets/logoes & images/cart-image.png'
import registerBanner from './assets/register-banner.png'
import messageEdit from './assets/message-edit.png'

const Main = () => {
  return (
    <div className="mt-44 flex flex-col justify-center items-center">
      <h1 className="text-center w-[448px]">
        سامانه مدیریت <span className="text-primary">هوشمند</span> سفارش های اینترنتی
      </h1>

      <div className="flex flex-col justify-center items-center">
        <video className="rounded-2xl mt-11" width="684" height="384.75" controls preload="auto">
          <source src="./assets/bunnyvideo.mp4" type="video/mp4" />
        </video>
        <p
          className="body-md w-[800px] flex justify-center items-center mt-10 text-center"
          style={{ direction: 'rtl' }}
        >
          کارت ساز آمده تا دیگر نیازی به یادداشت سفارش های خود در دفتر و یا سررسید نباشید.به راحتی
          سفارشات خود را مدیریت کنید و آن ها را تعیین وضعیت کنید.حتی به راحتی برگه ارسال پرینت کنید
          و آن را اختصاصی استفاده کنید.
        </p>
      </div>

      {/* brushed line */}
      <img className="mt-32 w-[90%]" src={brushedLine} />

      {/* display mode */}
      <div className="flex flex-col justify-center items-center">
        <div className="mt-10 flex flex-row justify-center items-center text-center px-4 py-[2px] gap-2 rounded-[80px] border border-t-0 border-b-silver">
          <p className="text-secondary body-sm">حالت نمایش</p>
        </div>
        <h3 className="mt-6">سیستمی کاملا تحت وب و آنلاین</h3>
        <p className="body-md mt-2 w-[800px] text-center" style={{ direction: 'rtl' }}>
          سیستم کارت ساز کاملا تحت وب اجرا شده است و نیازی به هیچ سخت افزار خاصی برای دیتاهای خود
          ندارید. به راحتی مشتریان را مدیریت کنید و سفارشات خود را به موقع ارسال و آن ها را جمع آوری
          کنید.
        </p>
        <div className="flex flex-row relative">
          <img className="mt-11 absolute -left-28 bottom-8" src={displayPhone} />
          <img className="mt-11" src={displayFrame} />
        </div>
      </div>

      {/* features */}
      <div className="flex flex-col justify-center items-center text-center">
        <div className="mt-10 flex flex-row justify-center items-center text-center px-4 py-[2px] gap-2 rounded-[80px] border border-t-0 border-b-silver">
          <p className="text-secondary body-sm">امکانات</p>
        </div>
        <h3 className="mt-2 w-[492px]">جدید ترین مدل مدیریت سبد خرید ها</h3>
        <p className="w-[809px] body-md mt-2 text-center" style={{ direction: 'rtl' }}>
          بیش از 100 ها فروشگاه سبد خرید های خود را در کارت ساز با امکانات متفاوت این سامانه مدیریت
          میکنند.
        </p>
        <div className="mt-10 w-[1224px] h-[348px] flex flex-row items-start gap-6">
          <BasicCard
            src={cartImage}
            title={'ثبت محصول'}
            description={
              'قبل از هر چیزی محصولات خود را ثبت کنید و برای آن ها عکس بگذارید تا به آسانی در سبد خرید درج شود.'
            }
          />
          <BasicCard
            src={cartImage}
            title={'مدیریت زمان'}
            description={
              'قبل از هر چیزی محصولات خود را ثبت کنید و برای آن ها عکس بگذارید تا به آسانی در سبد خرید درج شود.'
            }
          />
          <BasicCard
            src={cartImage}
            title={'ثبت پروفایل'}
            description={
              'قبل از هر چیزی محصولات خود را ثبت کنید و برای آن ها عکس بگذارید تا به آسانی در سبد خرید درج شود.'
            }
          />
          <BasicCard
            src={cartImage}
            title={'ایجاد سبد خرید اختصاصی'}
            description={
              'قبل از هر چیزی محصولات خود را ثبت کنید و برای آن ها عکس بگذارید تا به آسانی در سبد خرید درج شود.'
            }
          />
        </div>
      </div>

      {/* register-banner */}
      <div className="mt-20 relative">
        <img className="w-screen h-[259px]" src={registerBanner} />
        <div className="absolute top-0 right-[50%] translate-x-[50%] z-10 flex flex-col justify-center items-center">
          <h1 style={{ direction: 'rtl' }} className="mt-10 text-white ">
            هم اکنون ثبت نام کنید!
          </h1>
          <p className="mt-2 body-md text-white " style={{ direction: 'rtl' }}>
            ثبت نام در کارت ساز رایگان است.همین الان ثبت نام کنید و کارت ساز را تست کنید.
          </p>
          <button className="bg-secondary rounded-[32px] py-4 px-8 flex flex-row justify-center items-center mt-6 gap-2">
            <span className="overline-lg text-white">ثبت نام رایگان</span>
            <img src={messageEdit} />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-start items-end mt-10 w-[90%]">
        <h4>
          <span className="text-primary ml-2">کارت ساز</span>
          چیست ؟
        </h4>
        <p className="mt-4 body-md">
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
