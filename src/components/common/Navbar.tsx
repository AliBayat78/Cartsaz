import logo from '../../assets/logoes & images/logo.png'
import Button from '@mui/material/Button'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center fixed top-0 py-4 w-[90%] bg-white z-10">
      <div style={{ direction: 'rtl' }} className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-between items-center gap-8 ml-16">
          <p>آپدیت ها</p>
          <p>سوالات متداول</p>
          <p>تماس با ما</p>
        </div>
        <Button size="large" variant="outlined">
          ورود یا ثبت نام
        </Button>
      </div>
      <div>
        <img src={logo} />
      </div>
    </div>
  )
}

export default Navbar
