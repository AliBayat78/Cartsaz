import { useNavigate } from 'react-router-dom'
import arrowRight from './assets/arrow-right.png'
import vitrinLogo from './assets/vitrin-shop-logo.png'
import copy from './assets/copy.png'
import arrowLeft from './assets/arrow-left.png'
import box from './assets/box.png'
import shop from './assets/shop.png'
import call from './assets/call.png'
import QRcode from './assets/scan-barcode.png'
import Swal from 'sweetalert2'
import { localStorageCurrentUser } from '../../models/models'
import { useAppSelector } from '../../redux/store/store'

const Profile = () => {
  const navigate = useNavigate()

  const callInformation = useAppSelector((state) => state.vitrin).callInformation

  const localStorageUserValue: localStorageCurrentUser | null = JSON.parse(
    localStorage.getItem('currentUser') || 'null',
  )
  const vitrinUrl: string =
    localStorageUserValue !== null ? localStorageUserValue.VitrinUrl : 'Error'

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })

  const copyClipboard = async () => {
    navigator.clipboard
      .writeText(vitrinUrl)
      .then(() =>
        Toast.fire({
          icon: 'success',
          title: 'Copied to Clipboard',
        }),
      )
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: 'Failed to Copy',
        })
        console.log(err)
      })
  }

  return (
    <div className="flex flex-col h-full w-full">
      <nav className="flex flex-row justify-between items-center w-full h-16 border border-b-silver p-2">
        <div
          style={{ padding: '1px 6px 3px 6px', borderRadius: '40px' }}
          className={`sm:ml-8 border ${
            callInformation.phoneNumber
              ? 'text-success bg-success-bg border-success'
              : 'text-error-pale bg-error-bg border-error'
          } `}
        >
          {callInformation.phoneNumber ? 'فعال' : 'غیر فعال'}
        </div>
        <div className="sm:mr-8 gap-4 flex flex-row justify-center items-center">
          <p>ویترین شما</p>
          <img
            onClick={() => navigate(-1)}
            className="cursor-pointer"
            src={arrowRight}
            alt="back"
          />
        </div>
      </nav>

      <main className="flex flex-col items-center mt-8">
        <img className="2xs:h-[90px] lg:h-[200px]" src={vitrinLogo} alt="vitrin" />
        <p className="body-md mt-5">آدرس مستقیم ویترین شما در کارت ساز</p>

        <div className="mt-5 2xs:w-[230px] sm:w-[350px] h-[100px] rounded-2xl flex flex-col border border-light-silver justify-between items-center">
          <div className="flex justify-center items-center h-full">
            <p style={{ direction: 'ltr' }} className="text-primary">
              {vitrinUrl}
            </p>
          </div>
          <div
            onClick={() => copyClipboard()}
            className="cursor-pointer flex flex-row gap-2 justify-center items-center w-full h-[48px] bg-light-silver rounded-lg"
          >
            <p className="button-sm">کپی لینک ویترین شما</p>
            <img src={copy} alt="copy" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 mt-8">
          <div
            onClick={() => navigate('./vitrin-products')}
            className="2xs:w-[230px] sm:w-[350px] h-[56px] cursor-pointer border border-light-silver flex flex-row justify-between items-center"
          >
            <div className="flex flex-row justify-center items-center 2xs:gap-2 sm:gap-4">
              <img src={arrowLeft} alt="open" />
              <p className="text-success body-lg">3</p>
            </div>
            <div className="flex flex-row justify-center items-center 2xs:gap-2 sm:gap-4">
              <p className="body-lg">محصولات ویترین</p>
              <img className="mr-2" src={box} alt="box" />
            </div>
          </div>

          <div
            onClick={() => navigate('./call-info')}
            className="2xs:w-[230px] sm:w-[350px] h-[56px] cursor-pointer border border-light-silver flex flex-row justify-between items-center"
          >
            <div className="flex flex-row justify-center items-center 2xs:gap-2 sm:gap-4">
              <img src={arrowLeft} alt="open" />
              <p
                className={`${callInformation.phoneNumber ? 'text-success' : 'text-error'} body-lg`}
              >
                {callInformation.phoneNumber ? 'فعال' : 'غیر فعال'}
              </p>
            </div>
            <div className="flex flex-row justify-center items-center 2xs:gap-2 sm:gap-4">
              <p className="body-lg">اطلاعات تماس</p>
              <img className="mr-2" src={call} alt="box" />
            </div>
          </div>

          <div
            onClick={() => navigate('./vitrin-setting')}
            className="2xs:w-[230px] sm:w-[350px] h-[56px] cursor-pointer border border-light-silver flex flex-row justify-between items-center"
          >
            <div className="flex flex-row justify-center items-center 2xs:gap-2 sm:gap-4">
              <img src={arrowLeft} alt="open" />
            </div>
            <div className="flex flex-row justify-center items-center 2xs:gap-2 sm:gap-4">
              <p className="body-lg">تنظیمات کلی ویترین</p>
              <img className="mr-2" src={shop} alt="box" />
            </div>
          </div>

          <div
            onClick={() => navigate('./QRcode')}
            className="2xs:w-[230px] sm:w-[350px] h-[56px] cursor-pointer border border-light-silver flex flex-row justify-between items-center"
          >
            <div className="flex flex-row justify-center items-center 2xs:gap-2 sm:gap-4">
              <img src={arrowLeft} alt="open" />
            </div>
            <div className="flex flex-row justify-center items-center 2xs:gap-2 sm:gap-4">
              <p className="body-lg">دریافت QR code</p>
              <img className="mr-2" src={QRcode} alt="box" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile
