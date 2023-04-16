type ProductCartTypes = {
  imageSource: string
  title: string
  description: string
  price: string
}

const ProductCard: React.FC<ProductCartTypes> = ({ imageSource, title, description, price }) => {
  return (
    <div className="flex flex-col w-[200px] h-[300px] lg:w-[300px] lg:h-[350px] justify-start items-center border border-silver rounded-lg">
      <div className="w-full h-[175px] flex justify-center items-center border border-b-silver">
        <img src={imageSource} className="w-[146px] h-[146px] rounded-lg" />
      </div>
      <div className="mr-1">
        <p className="body-xs lg:body-md">{title}</p>
        <p
          style={{
            textOverflow: 'ellipsis',
            WebkitLineClamp: '1',
            WebkitBoxOrient: 'vertical',
          }}
          className="body-xs lg:body-md w-[190px] lg:w-[270px] overflow-hidden"
        >
          {description}
        </p>
        <p className="text-dark-green button-sm ">{price} تومان</p>
      </div>
    </div>
  )
}

export default ProductCard
