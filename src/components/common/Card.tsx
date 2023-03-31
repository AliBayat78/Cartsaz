type BasicCardProps = {
  src: string
  title: string
  description: string
}

export const BasicCard: React.FC<BasicCardProps> = ({ src, title, description }) => {
  return (
    <div
      style={{ boxShadow: '0px 4px 9px -8px rgba(0, 0, 0, 0.12)' }}
      className="max-w-[349px] sm:w-[288px] h-[348px] border border-silver flex flex-col justify-center items-center rounded-lg"
    >
      <div className="flex flex-col justify-center items-center">
        <img className="" src={src} />
        <h5 style={{ direction: 'rtl' }} className="mt-7">
          {title}
        </h5>
        <p style={{ direction: 'rtl' }} className="mt-4 body-sm">
          {description}
        </p>
      </div>
    </div>
  )
}
