import logo from '../../assets/logoes & images/logo.png'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import { isUserLoggedIn } from '../../hooks/isUserLoggedIn'

const Navbar = () => {
  const isLoggedIn = isUserLoggedIn()

  return (
    <div className="flex flex-row justify-between items-center fixed top-0 py-4 w-full bg-white z-10">
      <div style={{ direction: 'rtl' }} className="flex flex-row justify-between items-center">
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
      <div className="mr-4 sm:mr-16">
        <NavLink to="/">
          <img className="w-[100px] h-[37px] sm:w-[132px] md:[h-49px]" src={logo} />
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
