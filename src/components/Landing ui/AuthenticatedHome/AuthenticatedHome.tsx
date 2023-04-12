import cartShopLogo from '../assets/CartShop-logo.png'
import { useState } from 'react'
import Footer from '../../common/Footer'
import ContactUs from './ContactUs'

const AuthenticatedHome = () => {
  const [displaySection, setDisplaySection] = useState<string>('contact-us')

  return (
    <div className="flex flex-col justify-between items-center w-full h-screen">
      <div className="flex sm:flex-row 2xs:flex-col-reverse 2xs:justify-end 2xs:items-center sm:justify-between sm:items-center fixed top-0 py-4 w-full h-[152px] rounded-b-lg bg-primary z-10">
        <div className="2xs:ml-0 sm:ml-4 lg:ml-16 bg-white 2xs:w-[90vw] sm:w-[366px] h-12 rounded-lg 2xs:mt-10  sm:mt-36 border border-silver relative">
          <button
            onClick={() => setDisplaySection('contact-us')}
            className={`button-sm w-[50%] transition-all duration-300 h-full ${
              displaySection === 'contact-us' ? 'text-primary' : 'text-silver'
            }  border-r border-r-silver border-dashed`}
          >
            تماس با ما
          </button>
          <button
            onClick={() => setDisplaySection('products')}
            className={`button-sm transition-all duration-300 h-full w-[50%] ${
              displaySection === 'products' ? 'text-primary' : 'text-silver'
            }`}
          >
            محصولات
          </button>
          <div
            className={`2xs:w-[40%] h-[5px] rounded-t-lg transition-all duration-300 ease bg-primary absolute ${
              displaySection === 'products' ? '2xs:right-[5%]' : '2xs:right-[55%]'
            } 2xs:bottom-0 md:bottom-[0.5px]`}
          ></div>
        </div>

        <div className="flex flex-row mr-16 2xs:mr-2">
          <div className="flex flex-col justify-center items-center mr-4">
            <h5 className="text-white">فروشگاه کارت ساز</h5>
            <p className="body-xs 2xs:text-white">فروشگاه پیرهن،کفش و البسه</p>
          </div>
          <img className="2xs:w-[80px] 2xs:h-[80px] lg:w-[120px] lg:h-[120px]" src={cartShopLogo} />
        </div>
      </div>
      <div className="mt-44">{displaySection === 'contact-us' ? <ContactUs /> : <div></div>}</div>
      <Footer />
    </div>
  )
}

export default AuthenticatedHome
