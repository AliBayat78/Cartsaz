import logo from '../../../assets/logoes & images/logo.png'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center fixed top-0 w-[90%] mt-10">
      <div style={{ direction: 'rtl' }} className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-between items-center gap-8 ml-16">
          <p>آپدیت ها</p>
          <p>سوالات متداول</p>
          <p>تماس با ما</p>
        </div>
        <button className="text-primary border border-primary py-4 px-8 rounded-lg flex flex-row justify-center items-center">
          ورود یا ثبت نام
        </button>
      </div>
      <div>
        <img src={logo} />
      </div>
    </div>
  )
}

export default Navbar
