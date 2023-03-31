import logo from '../../assets/logoes & images/logo.png'
import Button from '@mui/material/Button'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center fixed top-0 py-4 w-full bg-white z-10">
      <div style={{ direction: 'rtl' }} className="flex flex-row justify-between items-center">
        <div className="hidden sm:flex flex-row justify-between items-center gap-8 ml-16">
          <p>آپدیت ها</p>
          <p>سوالات متداول</p>
          <p>تماس با ما</p>
        </div>
        <div className="ml-4 sm:ml-16">
          <Button size="large" variant="outlined">
            ورود یا ثبت نام
          </Button>
        </div>
      </div>
      <div className="mr-4 sm:mr-16">
        <img className="w-[100px] h-37px sm:w-[132px] md:h-49px" src={logo} />
      </div>
    </div>
  )
}

export default Navbar
