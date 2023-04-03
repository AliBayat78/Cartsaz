import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import registerBanner from '../assets/logoes & images/register-banner.png'
import registerBannerMobile from '../assets/logoes & images/register-banner-mobile.png'
import messageEdit from '../assets/icons/message-edit.png'
import contactUs from '../assets/logoes & images/contact-us.png'
import coloredInstagram from '../assets/icons/colored-instagram.png'
import coloredwhatsapp from '../assets/icons/colored-whatsapp.png'

const ContactUsPage = () => {
  return (
    <div className="mt-44 flex flex-col justify-between items-center w-full h-screen">
      <Navbar />
      <div className="flex flex-row w-[90%] justify-end items-center">
        <img className="w-[175px] h-[175px] mr-[40%]" src={contactUs} alt="contact-us" />
        <div className="flex flex-col items-end">
          <h3 className="text-primary">تماس با ما</h3>
          <p className="mt-6 body-md">
            جهت ارتباط با ما میتوانید با یکی از مسیر های زیر با ما ارتباط برقرار کنید:
          </p>
          <button className="mt-6 flex flex-row w-[392px] h-[64px] justify-center items-center border border-deep-pink rounded-lg">
            <p className="body-md text-deep-pink mr-2">پیام در دایرکت اینستاگرام</p>
            <img src={coloredInstagram} />
          </button>

          <button className="mt-2 flex flex-row w-[392px] h-[64px] justify-center items-center border border-neon-green rounded-lg">
            <p className="body-md text-neon-green mr-2">پیام در دایرکت واتساپ</p>
            <img src={coloredwhatsapp} />
          </button>

          <p className="mt-16 body-md">همچنین میتوانید از ایمیل زیر جهت ارسال پیام استفاده کنید:</p>

          <p className="mt-4 text-primary">Cartsaz.com@gmail.com</p>
        </div>
      </div>

      {/* register-banner */}
      <div className="mt-60 relative">
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
      <Footer />
    </div>
  )
}

export default ContactUsPage
