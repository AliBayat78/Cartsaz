import cartShopLogo from './assets/CartShop-logo.png'

const AuthenticatedHome = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-row justify-between items-center fixed top-0 py-4 w-full h-[152px] bg-primary z-10">
        <div className="ml-4 sm:ml-16 bg-white w-[366px] h-12 rounded-lg mt-36 border border-silver relative">
          <button
            className="button-sm w-[50%] h-full text-silver border-r border-r-silver border-dashed "
          >
            تماس با ما
          </button>
          <button className="button-sm h-full w-[50%] text-primary">محصولات</button>
          <div
            style={{ borderRadius: '8px 8px 0 0' }}
            className="w-[148px] h-[5px] bg-primary absolute right-4 bottom-[0.5px]"
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
