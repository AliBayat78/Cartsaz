import cartShopLogo from './assets/CartShop-logo.png'
import { useState } from 'react'

const AuthenticatedHome = () => {
  const [displaySection, setDisplaySection] = useState<string>('')

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-row justify-between items-center fixed top-0 py-4 w-full h-[152px] bg-primary z-10">
        <div className="ml-4 sm:ml-16 bg-white w-[366px] h-12 rounded-lg mt-36 border border-silver relative">
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
            className={`w-[148px] h-[5px] rounded-t-lg transition-all duration-300 ease bg-primary absolute ${
              displaySection === 'products' ? 'right-4' : 'right-[200px]'
            } bottom-[0.5px]`}
          ></div>
        </div>

        <div className="flex flex-row mr-16">
          <div className="flex flex-col justify-center items-center mr-4">
            <h5 className="text-white">فروشگاه کارت ساز</h5>
            <p className="body-xs text-white">فروشگاه پیرهن،کفش و البسه</p>
          </div>
          <img className="" src={cartShopLogo} />
        </div>
      </div>
    </div>
  )
}

export default AuthenticatedHome
