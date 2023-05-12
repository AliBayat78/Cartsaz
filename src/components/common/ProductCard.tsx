import { ProductCartTypes } from '../../models/models'

const ProductCard: React.FC<ProductCartTypes> = ({ imageSource, title, description, price }) => {
  return (
    <div className="relative flex flex-col w-[200px] h-[300px] lg:w-[300px] lg:h-[350px] justify-start items-center border border-silver rounded-lg">
      <div className="w-full h-[175px] flex justify-center items-center border border-b-silver">
        <img src={imageSource} className="w-[146px] h-[146px] rounded-lg" />
      </div>
      <div className="mr-1">
        <p className="body-xs lg:body-md">
          {title.length > 25 ? title.substring(0, 25) + '...' : title}
        </p>
        <p className="break-all body-xs lg:body-md h-full w-[190px] lg:w-[270px] overflow-hidden">
          {description.length > 30 ? description.substring(0, 100) + '...' : description}
        </p>
        <p className="text-dark-green button-sm absolute bottom-1 right-4 text-right">
          {price.length > 20 ? price.substring(0, 20) + '...' : price} {price ? 'تومان' : null}
        </p>
      </div>
    </div>
  )
}

export default ProductCard
