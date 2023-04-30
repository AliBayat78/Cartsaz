import { useNavigate } from 'react-router-dom'
import arrowRight from '../assets/arrow-right.png'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { RTLTextField } from '../../../components/common/RtlTextField'
import defaultPicture from '../assets/default-picture.png'

const VitrinProducts = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center w-full h-auto">
      <nav className="flex flex-row justify-end items-center w-full h-16 border border-b-silver p-2">
        <div className="sm:mr-8 gap-4 flex flex-row justify-center items-center">
          <p>محصولات ویترین</p>
          <img
            onClick={() => navigate(-1)}
            className="cursor-pointer"
            src={arrowRight}
            alt="back"
          />
        </div>
      </nav>

      <main className="flex flex-col justify-center items-center mt-8 2xs:w-[260px] sm:w-[364px]">
        <div className="border border-silver rounded-lg w-full h-[107px] flex flex-col items-center">
          <div className="hidden sm:flex flex-row justify-center items-center">
            <FormGroup>
              <FormControlLabel
                sx={{ gap: '10rem' }}
                control={<Switch defaultChecked />}
                label="نمایش تمام محصولات"
              />
            </FormGroup>
          </div>
          <div className="sm:hidden flex flex-row justify-center items-center">
            <FormGroup>
              <FormControlLabel
                sx={{ gap: '10px' }}
                control={<Switch defaultChecked />}
                label="نمایش تمام محصولات"
              />
            </FormGroup>
          </div>
          <p className="body-xs mr-2">
            در صورت انتخاب این گزینه تمام محصولات وارد شده در ویترین نیز قابل نمایش خواهند بود.
          </p>
        </div>

        <RTLTextField
          dir="rtl"
          sx={{ marginTop: '32px', width: '100%' }}
          label="جستجو محصول"
          placeholder="روغن زیتون"
        />

        <div className="h-[450px] w-full mt-8 overflow-y-auto">
          <div className="h-[82px] my-2 border border-silver rounded-lg flex flex-row justify-between items-center">
            <Switch />
            <div className="flex flex-row justify-center items-center mr-2">
              <div className="flex flex-col justify-center items-end mr-4">
                <h6>پور قهوه</h6>
                <p className="body-xs">قیمت واحد : 250,000 تومان</p>
              </div>
              <img src={defaultPicture} alt="picture" />
            </div>
          </div>
          <div className="h-[82px] my-2 border border-silver rounded-lg flex flex-row justify-between items-center">
            <Switch />
            <div className="flex flex-row justify-center items-center mr-2">
              <div className="flex flex-col justify-center items-end mr-4">
                <h6>پور قهوه</h6>
                <p className="body-xs">قیمت واحد : 250,000 تومان</p>
              </div>
              <img src={defaultPicture} alt="picture" />
            </div>
          </div>
          <div className="h-[82px] my-2 border border-silver rounded-lg flex flex-row justify-between items-center">
            <Switch />
            <div className="flex flex-row justify-center items-center mr-2">
              <div className="flex flex-col justify-center items-end mr-4">
                <h6>پور قهوه</h6>
                <p className="body-xs">قیمت واحد : 250,000 تومان</p>
              </div>
              <img src={defaultPicture} alt="picture" />
            </div>
          </div>
          <div className="h-[82px] my-2 border border-silver rounded-lg flex flex-row justify-between items-center">
            <Switch />
            <div className="flex flex-row justify-center items-center mr-2">
              <div className="flex flex-col justify-center items-end mr-4">
                <h6>پور قهوه</h6>
                <p className="body-xs">قیمت واحد : 250,000 تومان</p>
              </div>
              <img src={defaultPicture} alt="picture" />
            </div>
          </div>
          <div className="h-[82px] my-2 border border-silver rounded-lg flex flex-row justify-between items-center">
            <Switch />
            <div className="flex flex-row justify-center items-center mr-2">
              <div className="flex flex-col justify-center items-end mr-4">
                <h6>پور قهوه</h6>
                <p className="body-xs">قیمت واحد : 250,000 تومان</p>
              </div>
              <img src={defaultPicture} alt="picture" />
            </div>
          </div>
          <div className="h-[82px] my-2 border border-silver rounded-lg flex flex-row justify-between items-center">
            <Switch />
            <div className="flex flex-row justify-center items-center mr-2">
              <div className="flex flex-col justify-center items-end mr-4">
                <h6>پور قهوه</h6>
                <p className="body-xs">قیمت واحد : 250,000 تومان</p>
              </div>
              <img src={defaultPicture} alt="picture" />
            </div>
          </div>
        </div>
      </main>

      <button className="2xs:w-[260px] sm:w-[350px] h-[56px] bg-primary text-white rounded-lg my-8">
        تایید
      </button>
    </div>
  )
}

export default VitrinProducts
