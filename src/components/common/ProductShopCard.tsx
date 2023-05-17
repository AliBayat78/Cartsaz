import { useAppDispatch } from '../../redux/store/store'
import { ProductShopCardTypes } from '../../models/models'
import { minusAmountOfBuy, plusAmountOfBuy } from '../../redux/store/features/shopCardSlice'
import trash from '../../assets/icons/trash.png'

const ProductShopCard: React.FC<ProductShopCardTypes> = ({
  imageSource,
  title,
  description,
  price,
  logo,
  id,
  sellerName,
  amountOfBuy,
}) => {
  const dispatch = useAppDispatch()

  return (
    <div className="relative flex flex-col w-[200px] h-[300px] lg:w-[300px] lg:h-[350px] justify-start items-center border border-silver rounded-lg">
      <div className="w-full h-[175px] flex justify-center items-center border border-b-silver">
        <img src={imageSource} className="w-[146px] h-[146px] rounded-lg my-4" />
      </div>
      <div className="mr-1 h-full flex flex-col justify-center items-end">
        <p className="body-xs lg:body-md">
          {title.length > 25 ? title.substring(0, 25) + '...' : title}
        </p>
        <p className="break-all body-xs lg:body-md h-full w-[190px] lg:w-[270px] overflow-hidden">
          {description.length > 30 ? description.substring(0, 100) + '...' : description}
        </p>
        <div className="w-full flex flex-row justify-between items-center relative">
          <div className="flex flex-row justify-center items-center gap-4 relative bottom-1">
            <div className="flex flex-row justify-center items-center gap-2">
              <h2
                onClick={() => dispatch(minusAmountOfBuy({ id }))}
                className="text-error-pale rounded-full w-6 h-6 bg-error-bg flex justify-center items-center cursor-pointer"
              >
                {amountOfBuy === 1 ? <img src={trash} /> : '-'}
              </h2>
              <p>{amountOfBuy}</p>
              <h5
                onClick={() => dispatch(plusAmountOfBuy({ id }))}
                className="text-success-pale rounded-full w-6 h-6 bg-success-bg flex justify-center items-center cursor-pointer"
              >
                +
              </h5>
            </div>
            {logo ? <img className="w-[32px] h-[32px] relative rounded-lg" src={logo} /> : null}
          </div>
          <p className="text-dark-green button-sm text-right">
            {price.length > 20 ? price.substring(0, 20) + '...' : price} {price ? 'تومان' : null}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductShopCard
