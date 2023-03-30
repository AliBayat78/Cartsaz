import brushedLine from '../../assets/logoes & images/brushed-line.png'
import displayFrame from './assets/display-mode-Frame.png'
import displayPhone from './assets/display-mode-phone.png'

const Main = () => {
  return (
    <div className="mt-44 flex flex-col justify-center items-center">
      <h1 className="text-center w-[448px]">
        سامانه مدیریت <span className="text-primary">هوشمند</span> سفارش های اینترنتی
      </h1>

      <div className="flex flex-col justify-center items-center">
        <video className="rounded-2xl mt-11" width="684" height="384.75" controls preload="auto">
          <source src="/assets/test.mp4" type="video/mp4" />
        </video>
        <p
          className="body-md w-[800px] flex justify-center items-center mt-10 text-center"
          style={{ direction: 'rtl' }}
        >
          کارت ساز آمده تا دیگر نیازی به یادداشت سفارش های خود در دفتر و یا سررسید نباشید.به راحتی
          سفارشات خود را مدیریت کنید و آن ها را تعیین وضعیت کنید.حتی به راحتی برگه ارسال پرینت کنید
          و آن را اختصاصی استفاده کنید.
        </p>
      </div>

      {/* brushed line */}
      <img className="mt-32 w-[90%]" src={brushedLine} />

      {/* display mode */}
      <div className="flex flex-col justify-center items-center">
        <div className="mt-10 flex flex-row justify-center items-center text-center px-4 py-[2px] gap-2 rounded-[80px] border border-t-0 border-b-silver">
          <p className="text-secondary body-sm">حالت نمایش</p>
        </div>
        <h3 className="mt-6">سیستمی کاملا تحت وب و آنلاین</h3>
        <p className="body-md mt-2 w-[800px] text-center" style={{ direction: 'rtl' }}>
          سیستم کارت ساز کاملا تحت وب اجرا شده است و نیازی به هیچ سخت افزار خاصی برای دیتاهای خود
          ندارید. به راحتی مشتریان را مدیریت کنید و سفارشات خود را به موقع ارسال و آن ها را جمع آوری
          کنید.
        </p>
        <div className="flex flex-row relative">
          <img className="mt-11 absolute -left-28 bottom-8" src={displayPhone} />
          <img className="mt-11" src={displayFrame} />
        </div>
      </div>

      {/* features */}
      <div className="mt-10 flex flex-row justify-center items-center text-center px-4 py-[2px] gap-2 rounded-[80px] border border-t-0 border-b-silver">
        <p className="text-secondary body-sm">امکانات</p>
      </div>
    </div>
  )
}
export default Main
