import { useLocation, useNavigate } from 'react-router-dom'
import arrowRight from '../assets/arrow-right.png'
import QRCode from 'qrcode.react'
import arrowDown from '../assets/arrow-down.png'
import printer from '../assets/printer.png'

const QRcode = () => {
  const navigate = useNavigate()
  const url = useLocation()

  return (
    <div className="flex flex-col items-center w-full h-auto">
      <nav className="flex flex-row justify-end items-center w-full h-16 border border-b-silver p-2">
        <div className="sm:mr-8 gap-4 flex flex-row justify-center items-center">
          <p>QR Code</p>
          <img
            onClick={() => navigate(-1)}
            className="cursor-pointer"
            src={arrowRight}
            alt="back"
          />
        </div>
      </nav>

      <main className="flex flex-col justify-center items-center mt-8 2xs:w-[260px] sm:w-[364px]">
        <div>
          <QRCode
            value={`${window.location.origin}/${url.pathname}`}
            size={128}
            fgColor="#000000"
            bgColor="#ffffff"
            level="L"
          />
        </div>

        <div className="mt-4 flex flex-col justify-center items-center w-full">
          <button className="2xs:w-[260px] sm:w-[350px] h-[56px] bg-light-silver rounded-lg mt-4 flex flex-row justify-center items-center gap-3">
            <p className="button-sm">پرینت مستقیم</p>
            <img src={printer} alt="print" />
          </button>
          <button className="2xs:w-[260px] sm:w-[350px] h-[56px] bg-primary text-white rounded-lg mt-2 flex flex-row justify-center items-center gap-3">
            <p className="button-sm text-white">دانلود تصویر</p>
            <img src={arrowDown} alt="download" />
          </button>

          <p className="mt-4 body-xs">
            این qur کد اختصاصی ویترین فروشگاه شماست که میتوانید آن را چاپ کرده و در مغازه یا فروشگاه
            خود درج کنید تا کاربران به راحتی با اسکن این تصویر به ویترین شما بیایند و محصولات شما را
            به صورت دیجیتالی مشاهده کنند.
          </p>
        </div>
      </main>
    </div>
  )
}

export default QRcode
