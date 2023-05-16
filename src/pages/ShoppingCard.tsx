import { useNavigate } from 'react-router-dom'
import arrowRight from './Profile/assets/arrow-right.png'
import { RTLTextField } from '../components/common/RtlTextField'

const ShoppingCard = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-full w-full">
      <nav className="flex flex-row justify-end items-center w-screen h-16 border border-b-silver p-2">
        <div className="sm:mr-8 gap-4 flex flex-row justify-center items-center">
          <p>سبد خرید</p>
          <img
            onClick={() => navigate(-1)}
            className="cursor-pointer"
            src={arrowRight}
            alt="back"
          />
        </div>
      </nav>

      <main className="flex flex-col justify-end items-end mt-8 2xs:w-[260px] sm:w-screen">
        <div className="2xs:w-[260px] sm:w-[364px] mr-8">
          <RTLTextField
            dir="rtl"
            sx={{ marginTop: '16px', width: '100%' }}
            label="جست و جوی محصول مورد نظر ..."
            placeholder="پیرهن مردانه"
            multiline
          />
        </div>

        <div className="flex flex-col w-full items-center">
          <div className="flex flex-row-reverse justify-center flex-wrap xl:justify-start items-center gap-8 2xs:w-[100vw] sm:w-[90vw] my-8"></div>
        </div>
      </main>
    </div>
  )
}

export default ShoppingCard
