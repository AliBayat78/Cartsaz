import ProductCard from '../../common/ProductCard'
import { RTLTextField } from '../../common/RtlTextField'
import searchItem from '../assets/receipt-search.png'

const Products = () => {
  return (
    <div className="flex flex-col justify-end items-end w-screen h-auto">
      <div className="2xs:w-[250px] xs:w-[340px] small:w-[360px] mr-4 relative">
        <img className="absolute top-8 left-4" src={searchItem} alt="?" />
        <RTLTextField
          dir="rtl"
          sx={{ marginTop: '16px', width: '100%' }}
          label="جست و جوی محصول مورد نظر ..."
          placeholder="پیرهن مردانه"
          multiline
        />
      </div>
      <div className="flex flex-row gap-8 2xs:w-[100vw] justify-center items-center sm:w-[90vw] flex-wrap xl:justify-start mt-8">
        <ProductCard
          imageSource={'https://s8.uupload.ir/files/product-image_u86x.png'}
          title={'مانیتور مخصوص بازی'}
          description={'مدل سامسونگ asd;pasldkasldkalsdkas213124124asdasdasdsadsa'}
          price={'256,000'}
        />
        <ProductCard
          imageSource={'https://s8.uupload.ir/files/product-image_u86x.png'}
          title={'مانیتور مخصوص بازی'}
          description={'مدل سامسونگ asd;pasldkasldkalsdkas213124124asdasdasdsadsa'}
          price={'256,000'}
        />
        <ProductCard
          imageSource={'https://s8.uupload.ir/files/product-image_u86x.png'}
          title={'مانیتور مخصوص بازی'}
          description={'مدل سامسونگ asd;pasldkasldkalsdkas213124124asdasdasdsadsa'}
          price={'256,000'}
        />
        <ProductCard
          imageSource={'https://s8.uupload.ir/files/product-image_u86x.png'}
          title={'مانیتور مخصوص بازی'}
          description={'مدل سامسونگ asd;pasldkasldkalsdkas213124124asdasdasdsadsa'}
          price={'256,000'}
        />
        <ProductCard
          imageSource={'https://s8.uupload.ir/files/product-image_u86x.png'}
          title={'مانیتور مخصوص بازی'}
          description={'مدل سامسونگ asd;pasldkasldkalsdkas213124124asdasdasdsadsa'}
          price={'256,000'}
        />
        <ProductCard
          imageSource={'https://s8.uupload.ir/files/product-image_u86x.png'}
          title={'مانیتور مخصوص بازی'}
          description={'مدل سامسونگ asd;pasldkasldkalsdkas213124124asdasdasdsadsa'}
          price={'256,000'}
        />
        <ProductCard
          imageSource={'https://s8.uupload.ir/files/product-image_u86x.png'}
          title={'مانیتور مخصوص بازی'}
          description={'مدل سامسونگ asd;pasldkasldkalsdkas213124124asdasdasdsadsa'}
          price={'256,000'}
        />
        <ProductCard
          imageSource={'https://s8.uupload.ir/files/product-image_u86x.png'}
          title={'مانیتور مخصوص بازی'}
          description={'مدل سامسونگ asd;pasldkasldkalsdkas213124124asdasdasdsadsa'}
          price={'256,000'}
        />
        <ProductCard
          imageSource={'https://s8.uupload.ir/files/product-image_u86x.png'}
          title={'مانیتور مخصوص بازی'}
          description={'مدل سامسونگ asd;pasldkasldkalsdkas213124124asdasdasdsadsa'}
          price={'256,000'}
        />
        <ProductCard
          imageSource={'https://s8.uupload.ir/files/product-image_u86x.png'}
          title={'مانیتور مخصوص بازی'}
          description={'مدل سامسونگ asd;pasldkasldkalsdkas213124124asdasdasdsadsa'}
          price={'256,000'}
        />
        <ProductCard
          imageSource={'https://s8.uupload.ir/files/product-image_u86x.png'}
          title={'مانیتور مخصوص بازی'}
          description={'مدل سامسونگ asd;pasldkasldkalsdkas213124124asdasdasdsadsa'}
          price={'256,000'}
        />
        <ProductCard
          imageSource={'https://s8.uupload.ir/files/product-image_u86x.png'}
          title={'مانیتور مخصوص بازی'}
          description={'مدل سامسونگ asd;pasldkasldkalsdkas213124124asdasdasdsadsa'}
          price={'256,000'}
        />
        <ProductCard
          imageSource={'https://s8.uupload.ir/files/product-image_u86x.png'}
          title={'مانیتور مخصوص بازی'}
          description={'مدل سامسونگ asd;pasldkasldkalsdkas213124124asdasdasdsadsa'}
          price={'256,000'}
        />
      </div>
    </div>
  )
}

export default Products
