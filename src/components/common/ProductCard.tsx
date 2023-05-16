import { ProductCardTypes } from '../../models/models'
import { updateProductLogo } from '../../redux/store/features/productSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store/store'
import { useEffect } from 'react'

const ProductCard: React.FC<ProductCardTypes> = ({
  imageSource,
  title,
  description,
  price,
  logo,
  id,
  sellerName,
}) => {
  const logoImageState = useAppSelector((state) => state.vitrin).vitrinSetting.LogoImage
  const vitrinSettingProperties = useAppSelector((state) => state.vitrin)
  const shopCardState = useAppSelector((state) => state.shopCard)
  const registerState = useAppSelector((state) => state.register)

  const colorName = vitrinSettingProperties.vitrinSetting.VitrinColor.colorName
  const dispatch = useAppDispatch()
  const user =
    registerState[0]?.shopName ||
    JSON.parse(localStorage.getItem('currentUser') || 'null')?.Username

  useEffect(() => {
    dispatch(updateProductLogo({ id, logoName: logoImageState, sellerName }))
  }, [logoImageState, logo])

  const handleBuyProduct = () => {}

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
            <button
              className={`cursor-pointer w-[50px] h-[30px] bg-${colorName} ${
                sellerName === user ? 'hidden' : 'block'
              } text-white rounded-lg`}
            >
              خرید
            </button>
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

export default ProductCard
