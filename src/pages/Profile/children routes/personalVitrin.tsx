import { useNavigate } from 'react-router-dom'
import arrowRight from '../assets/arrow-right.png'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import telegram from '../assets/telegram.png'
import call from '../assets/orange-call.png'
import user from '../assets/user.png'
import shop from '../assets/gray-shop.png'
import { useAppSelector } from '../../../redux/store/store'
import ProductCard from '../../../components/common/ProductCard'

const PersonalVitrin = () => {
  const navigate = useNavigate()

  const registerState = useAppSelector((state) => state.register)
  const vitrinState = useAppSelector((state) => state.vitrin)
  const callInformationState = useAppSelector((state) => state.vitrin.callInformation)

  const { phoneNumber, instagramId, waNumber, telegramId, shopAddress, showContactInfo } =
    callInformationState

  const sellerProducts = vitrinState.vitrinProducts.products

  const vitrinName: string =
    registerState[0]?.shopName ||
    JSON.parse(localStorage.getItem('currentUser') || 'null')?.Username ||
    'ناشناس'
  const sellerName: string = registerState[0]?.fullName

  return (
    <div className="flex flex-col items-center w-full h-auto">
      <nav className="flex flex-row justify-end items-center w-screen h-16 border border-b-silver p-2">
        <div className="sm:mr-8 gap-4 flex flex-row justify-center items-center">
          <p>ویترین شخصی : {vitrinName}</p>
          <img
            onClick={() => navigate('/')}
            className="cursor-pointer"
            src={arrowRight}
            alt="back"
          />
        </div>
      </nav>

      <main className="flex flex-row justify-end items-center mt-8 md:w-full 2xs:w-[260px] sm:w-[364px]">
        <div className="mx-40 border border-light-silver w-full h-[600px] overflow-y-scroll overflow-x-hidden">
          <p className="body-md mt-4 mr-8">محصولات : </p>
          <div className="w-[90%] h-full flex flex-row-reverse gap-8 justify-center items-center flex-wrap xl:justify-start">
            {sellerProducts?.map((product) => {
              return product.showProduct ? (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  imageSource={product.imageSource}
                  description={product.description}
                  price={product.price}
                />
              ) : null
            })}
          </div>
        </div>
        <div>
          <div className="body-md mr-8 mt-4 flex flex-row justify-between items-center bg-violet-200 2xs:w-[90vw] sm:w-[366px] h-12 rounded-lg p-2">
            <div className="flex flex-row justify-center items-center">
              <img className="mr-3" src={user} alt="call" />
              <p className="sm:body-md 2xs:body-xs 2xs:mr-1 sm:mr-2 2xs:text-royal-purple">
                نام فروشنده
              </p>
            </div>

            <p
              style={{ direction: 'ltr' }}
              className="sm:body-md 2xs:body-xs 2xs:text-royal-purple 2xs:ml-2 sm:ml-4"
            >
              {showContactInfo && sellerName ? sellerName : 'ثبت نشده'}
            </p>
          </div>
          <div className="body-md mr-8 mt-4 flex flex-row justify-between items-center bg-peach 2xs:w-[90vw] sm:w-[366px] h-12 rounded-lg p-2">
            <div className="flex flex-row justify-center items-center">
              <img className="mr-3" src={call} alt="call" />
              <p className="sm:body-md 2xs:body-xs 2xs:mr-1 sm:mr-2 2xs:text-bright-red">
                شماره تماس
              </p>
            </div>

            <p
              style={{ direction: 'ltr' }}
              className="sm:body-md 2xs:body-xs 2xs:text-bright-red 2xs:ml-2 sm:ml-4"
            >
              {phoneNumber || 'ثبت نشده'}
            </p>
          </div>
          <div className="body-md mr-8 mt-4 flex flex-row justify-between items-center bg-baby-pink 2xs:w-[90vw] sm:w-[366px] h-12 rounded-lg p-2">
            <div className="flex flex-row justify-center items-center">
              <img className="mr-3" src={instagram} alt="instagram" />
              <p className="sm:body-md 2xs:body-xs 2xs:mr-1 sm:mr-2 2xs:text-crimson">
                پیج اینستاگرام
              </p>
            </div>
            <p
              style={{ direction: 'ltr' }}
              className="sm:body-md 2xs:body-xs 2xs:text-crimson 2xs:ml-2 sm:ml-4"
            >
              {showContactInfo && instagramId ? instagramId : 'ثبت نشده'}
            </p>
          </div>
          <div className="body-md mr-8 mt-4 flex flex-row justify-between items-center bg-mint 2xs:w-[90vw] sm:w-[366px] h-12 rounded-lg p-2">
            <div className="flex flex-row justify-center items-center">
              <img className="mr-3" src={whatsapp} alt="whatsapp" />
              <p className="sm:body-md 2xs:body-xs 2xs:mr-1 sm:mr-2 2xs:text-dark-green">
                شماره واتساپ
              </p>
            </div>
            <p
              style={{ direction: 'ltr' }}
              className="sm:body-md 2xs:body-xs 2xs:text-dark-green 2xs:ml-2 sm:ml-4"
            >
              {showContactInfo && waNumber ? waNumber : 'ثبت نشده'}
            </p>
          </div>
          <div className="body-md mr-8 mt-4 flex flex-row justify-between items-center bg-baby-blue 2xs:w-[90vw] sm:w-[366px] h-12 rounded-lg p-2">
            <div className="flex flex-row justify-center items-center">
              <img className="mr-3" src={telegram} alt="telegram" />
              <p className="sm:body-md 2xs:body-xs 2xs:mr-1 sm:mr-2 2xs:text-royal-blue">
                آیدی تلگرام
              </p>
            </div>
            <p
              style={{ direction: 'ltr' }}
              className="sm:body-md 2xs:body-xs 2xs:text-royal-blue 2xs:ml-2 sm:ml-4"
            >
              {showContactInfo && telegramId ? telegramId : 'ثبت نشده'}
            </p>
          </div>
          <div
            className={`body-md mr-8 mt-4 bg-light-silver 2xs:w-[90vw] sm:w-[366px] min-h-30 rounded-lg flex ${
              shopAddress
                ? 'flex-col justify-center items-center'
                : 'flex-row justify-between items-center'
            }`}
          >
            <div className="flex flex-row items-center mt-2">
              <img className="mr-4" src={shop} />
              <p className="body-md mr-2">ادرس دفتر/مغازه</p>
            </div>
            <p
              className={`${
                shopAddress ? 'body-xs w-[90%] mt-4 mr-2' : 'body-md 2xs:ml-2 sm:ml-4'
              } p-2`}
            >
              {showContactInfo && shopAddress ? shopAddress : 'ثبت نشده'}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PersonalVitrin
