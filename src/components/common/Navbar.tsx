import logo from '../../assets/logoes & images/logo.png'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import { isUserLoggedIn } from '../../hooks/isUserLoggedIn'
import { useState } from 'react'

const Navbar = () => {
  const isLoggedIn = isUserLoggedIn()
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)

  return (
    <div className="flex flex-row justify-between items-center fixed top-0 py-4 w-full bg-white z-10">
      <div
        style={{ direction: 'rtl' }}
        className="flex flex-row justify-end sm:justify-between items-center w-full sm:w-auto"
      >
        <div className="hidden sm:flex flex-row justify-between items-center gap-8 ml-16">
          <NavLink className={({ isActive }) => (isActive ? 'text-primary' : '')} to="/updates">
            آپدیت ها
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-primary' : '')} to="/questions">
            سوالات متداول
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-primary' : '')} to="/contact-us">
            تماس با ما
          </NavLink>
        </div>
        <div className={`ml-4 sm:ml-16 ${isLoggedIn ? 'hidden' : ''}`}>
          <NavLink to="/login">
            <Button size="large" variant="outlined">
              ورود یا ثبت نام
            </Button>
          </NavLink>
        </div>
      </div>
      <div className="flex sm:hidden relative h-full w-full">
        <div
          onClick={() => setOpenSidebar((prev) => !prev)}
          className="h-[26px] w-[32px] absolute -top-4 right-[20px] flex flex-col justify-between z-30"
        >
          <span
            className={`${
              openSidebar ? 'rotate-45' : 'rotate-0'
            } origin-[0%_0%] h-[4px] w-full rounded-lg bg-gray-500 transition-transform duration-500 ease-in-out`}
          ></span>
          <span
            className={`${
              openSidebar ? 'scale-y-0' : ''
            }  h-[4px] w-full rounded-lg bg-gray-500 transition-transform duration-200 ease-in-out`}
          ></span>
          <span
            className={`${
              openSidebar ? '-rotate-45' : 'rotate-0'
            } origin-[0%_100%] h-[4px] w-full rounded-lg bg-gray-500 transition-transform duration-500 ease-in-out`}
          ></span>
        </div>
        <div
          className={`absolute top-0 right-0 shadow-lg transition-all duration-500 ease-in-out bg-white z-20 h-screen ${
            openSidebar ? 'w-[90%]' : 'w-[0%] -right-20 opacity-0'
          }
             flex flex-col text-center`}
        >
          <div className="flex flex-col justify-between items-center mt-12 gap-8">
            <NavLink className={({ isActive }) => (isActive ? 'text-primary' : '')} to="/">
              خانه
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'text-primary' : '')} to="/updates">
              آپدیت ها
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'text-primary' : '')} to="/questions">
              سوالات متداول
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-primary' : '')}
              to="/contact-us"
            >
              تماس با ما
            </NavLink>
          </div>
        </div>
      </div>
      <div className="mr-4 hidden sm:mr-16 sm:flex">
        <NavLink to="/">
          <img className="w-[100px] h-[37px] sm:w-[132px] md:[h-49px]" src={logo} />
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
