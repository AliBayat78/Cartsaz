import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import telegram from '../assets/telegram.png'
import call from '../assets/call.png'
import shop from '../assets/shop.png'

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between items-center bg-baby-pink 2xs:w-[90vw] sm:w-[366px] h-12 rounded-lg sm:mt-4">
        <p
          style={{ direction: 'ltr' }}
          className="sm:body-md 2xs:body-xs 2xs:text-crimson 2xs:ml-2 sm:ml-4"
        >
          @Shop-Test11111
        </p>
        <div className="flex flex-row justify-center items-center">
          <p className="sm:body-md 2xs:body-xs 2xs:mr-1 sm:mr-2 2xs:text-crimson">پیج اینستاگرام</p>
          <img className="mr-3" src={instagram} alt="instagram" />
        </div>
      </div>
      <div className="mt-2 flex flex-row justify-between items-center bg-mint 2xs:w-[90vw] sm:w-[366px] h-12 rounded-lg">
        <p
          style={{ direction: 'ltr' }}
          className="sm:body-md 2xs:body-xs 2xs:text-dark-green 2xs:ml-2 sm:ml-4"
        >
          09111111111
        </p>
        <div className="flex flex-row justify-center items-center">
          <p className="sm:body-md 2xs:body-xs 2xs:mr-1 sm:mr-2 2xs:text-dark-green">واتساپ</p>
          <img className="mr-3" src={whatsapp} alt="whatsapp" />
        </div>
      </div>
      <div className="mt-2 flex flex-row justify-between items-center bg-baby-blue 2xs:w-[90vw] sm:w-[366px] h-12 rounded-lg">
        <p
          style={{ direction: 'ltr' }}
          className="sm:body-md 2xs:body-xs 2xs:text-royal-blue 2xs:ml-2 sm:ml-4"
        >
          @Shop-Telegram1111
        </p>
        <div className="flex flex-row justify-center items-center">
          <p className="sm:body-md 2xs:body-xs 2xs:mr-1 sm:mr-2 2xs:text-royal-blue">تلگرام</p>
          <img className="mr-3" src={telegram} alt="telegram" />
        </div>
      </div>
      <div className="mt-2 flex flex-row justify-between items-center bg-peach 2xs:w-[90vw] sm:w-[366px] h-12 rounded-lg">
        <p
          style={{ direction: 'ltr' }}
          className="sm:body-md 2xs:body-xs 2xs:text-bright-red 2xs:ml-2 sm:ml-4"
        >
          09545412457
        </p>
        <div className="flex flex-row justify-center items-center">
          <p className="sm:body-md 2xs:body-xs 2xs:mr-1 sm:mr-2 2xs:text-bright-red">تماس تلفنی</p>
          <img className="mr-3" src={call} alt="call" />
        </div>
      </div>

      <div className="mt-2 bg-light-silver 2xs:w-[90vw] sm:w-[366px] min-h-30 rounded-lg flex flex-col justify-center items-end">
        <div className="flex flex-row items-center mt-2">
          <p className="body-md mr-2">ادرس دفتر/مغازه</p>
          <img className="mr-4" src={shop} />
        </div>
        <p className="body-xs w-[90%] mt-4 mr-2">
          تهران ; میدان آزادی ; بلوار استاد گودرزی ; خیابان محمدی ; پلاک 14 ; واحد 2 ; مغازه کارت
          ساز
        </p>
      </div>
    </div>
  )
}

export default ContactUs
