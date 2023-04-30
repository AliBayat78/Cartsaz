import { useNavigate } from 'react-router-dom'
import arrowRight from '../assets/arrow-right.png'

const CallInformation = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center w-full h-auto">
      <nav className="flex flex-row justify-end items-center w-full h-16 border border-b-silver p-2">
        <div className="sm:mr-8 gap-4 flex flex-row justify-center items-center">
          <p>اطلاعات تماس</p>
          <img
            onClick={() => navigate(-1)}
            className="cursor-pointer"
            src={arrowRight}
            alt="back"
          />
        </div>
      </nav>
    </div>
  )
}

export default CallInformation
