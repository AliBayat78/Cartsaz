import { RTLTextField } from '../../common/RtlTextField'
import searchItem from '../assets/receipt-search.png'
import productImage from '../assets/product-image.png'

const Products = () => {
  return (
    <div className="flex flex-col justify-end items-end w-screen h-auto">
      <div className="w-[360px] mr-4 relative">
        <img className="absolute top-8 left-4" src={searchItem} alt="?" />
        <RTLTextField
          dir="rtl"
          sx={{ marginTop: '16px', width: '100%' }}
          label="جست و جوی محصول مورد نظر ..."
          placeholder="پیرهن مردانه"
          multiline
        />
      </div>
      <div className="flex flex-row w-[90vw] flex-wrap justify-start items-center">
        <div className="flex flex-col w-[200px] h-[300px] justify-start items-center border border-silver rounded-lg">
          <div className="w-full h-[175px] flex justify-center items-center border border-b-silver">
            <img src={productImage} className="w-[146px] h-[146px] rounded-lg" />
          </div>
          <div className="mr-1">
            <p className="body-xs">مانیتور مخصوص بازی</p>
            <p
              style={{
                textOverflow: 'ellipsis',
                WebkitLineClamp: '1',
                WebkitBoxOrient: 'vertical',
              }}
              className="body-xs w-[190px] overflow-hidden"
            >
              سامسونگ مدل LF23124124FH213124124124asda213231
            </p>
            <p className="text-dark-green button-sm">256,000 تومان</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
