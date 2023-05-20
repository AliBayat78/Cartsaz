import cartShopLogo from '../assets/CartShop-logo.png'
import { useState } from 'react'
import Footer from '../../common/Footer'
import ContactUs from './ContactUs'
import Products from './Products'
import profile from '../assets/profile.png'
import shoppingCard from '../assets/shop-card.png'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../redux/store/store'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'

const AuthenticatedHome = () => {
  const [displaySection, setDisplaySection] = useState<string>('products')
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)

  const { logout } = useAuth()

  const vitrinSettingProperties = useAppSelector((state) => state.vitrin)
  const shopCardState = useAppSelector((state) => state.shopCard)

  const colorName = vitrinSettingProperties.vitrinSetting.VitrinColor.colorName

  const navigate = useNavigate()

  return (
    <div
      className={`flex flex-col justify-between items-center w-full overflow-x-hidden h-screen ${
        displaySection === 'contact-us' ? 'overflow-y-hidden' : 'overflow-y-scroll'
      }`}
    >
      <div
        className={`flex sm:flex-row 2xs:flex-col-reverse 2xs:justify-end 2xs:items-center sm:justify-between sm:items-center fixed top-0 py-4 w-full h-[152px] rounded-b-lg bg-${colorName} z-10`}
      >
        <div className="2xs:ml-0 sm:ml-4 lg:ml-16 bg-white 2xs:w-[90vw] sm:w-[366px] h-12 rounded-lg sm:mt-28 border border-silver sm:relative 2xs:absolute -bottom-5">
          <button
            onClick={() => setDisplaySection('contact-us')}
            className={`button-sm w-[50%] transition-all duration-300 h-full ${
              displaySection === 'contact-us' ? `text-${colorName}` : 'text-silver'
            }  border-r border-r-silver border-dashed`}
          >
            تماس با ما
          </button>
          <button
            onClick={() => setDisplaySection('products')}
            className={`button-sm transition-all duration-300 h-full w-[50%] ${
              displaySection === 'products' ? `text-${colorName}` : 'text-silver'
            }`}
          >
            محصولات
          </button>
          <div
            className={`2xs:w-[40%] h-[5px] rounded-t-lg transition-all duration-300 ease bg-${colorName} absolute ${
              displaySection === 'products' ? '2xs:right-[5%]' : '2xs:right-[55%]'
            } 2xs:bottom-0 md:bottom-[0.5px]`}
          ></div>
        </div>

        <div className="flex flex-row md:justify-center justify-end items-center mr-16 2xs:mr-2 md:w-auto w-screen h-full">
          <div className="hidden md:flex flex-row justify-center items-center mt-36 mr-12">
            <div
              onClick={() => {
                navigate('/shoppingCard')
              }}
              className="cursor-pointer mr-10 flex flex-col justify-center items-center text-center bg-white w-[64px] h-[64px] rounded-full"
            >
              <img className="w-[30px] mr-1 mt-1" src={shoppingCard} alt="shop-card" />
              <span className={`text-${colorName} body-md`}>{shopCardState.length}</span>
            </div>
            <img
              className="cursor-pointer"
              onClick={() => {
                navigate('/profile')
              }}
              src={profile}
              alt="profile"
            />
          </div>
          <div className="fixed right-14 md:right-0 md:relative flex flex-col justify-center items-center mr-4">
            <h5 className="text-white">فروشگاه کارت ساز</h5>
            <p className="body-xs 2xs:text-white">فروشگاه پیرهن،کفش و البسه</p>
          </div>
          <div
            className={`transition-all duration-500 ease-in-out ${
              openSidebar ? 'w-full' : 'w-[50px]'
            } flex md:hidden relative h-full`}
          >
            <div
              onClick={() => setOpenSidebar((prev) => !prev)}
              className="h-[26px] w-[32px] absolute top-10 right-[20px] flex flex-col justify-between z-30"
            >
              <span
                className={`${
                  openSidebar ? 'rotate-45' : 'rotate-0'
                } origin-[0%_0%] h-[4px] w-full rounded-lg bg-royal-purple transition-transform duration-500 ease-in-out`}
              ></span>
              <span
                className={`${
                  openSidebar ? 'scale-y-0' : ''
                }  h-[4px] w-full rounded-lg bg-royal-purple transition-transform duration-200 ease-in-out`}
              ></span>
              <span
                className={`${
                  openSidebar ? '-rotate-45' : 'rotate-0'
                } origin-[0%_100%] h-[4px] w-full rounded-lg bg-royal-purple transition-transform duration-500 ease-in-out`}
              ></span>
            </div>

            <div
              className={`absolute -top-4 -right-4 shadow-lg transition-all duration-500 ease-in-out bg-white z-20 h-screen ${
                openSidebar ? 'w-[50%]' : 'w-[0%] -right-20 opacity-0'
              }
             flex flex-col text-center`}
            >
              <div className="flex flex-col justify-between items-center mt-28 gap-8">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white bg-primary w-full h-[50px] flex justify-center items-center'
                      : ''
                  }
                  to="/"
                >
                  خانه
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white bg-primary w-full h-[50px] flex justify-center items-center'
                      : ''
                  }
                  to="/profile"
                >
                  پروفایل
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white bg-primary w-full h-[50px] flex justify-center items-center'
                      : ''
                  }
                  to="/shoppingCard"
                >
                  سبد خرید
                </NavLink>
                <p
                  onClick={() => {
                    logout()
                    navigate('/login')
                  }}
                  className="text-error"
                >
                  خروج
                </p>
              </div>
            </div>
          </div>
          <img
            className="hidden md:flex 2xs:w-[80px] 2xs:h-[80px] lg:w-[120px] lg:h-[120px]"
            src={cartShopLogo}
          />
        </div>
      </div>
      <div className={`relative top-[152px]`}>
        {displaySection === 'contact-us' ? <ContactUs /> : <Products />}
      </div>
      <Footer />
    </div>
  )
}

export default AuthenticatedHome
