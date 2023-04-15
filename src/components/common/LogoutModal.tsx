import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import questionMark from '../../assets/icons/question-mark.png'

const LogoutModal = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const logoutHandler = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-400 z-10">
      <div className="2xs:w-[240px] 2xs:h-[280px] xs:w-[300px] sm:w-[400px] sm:h-[300px] bg-white border border-silver rounded-lg flex flex-col justify-center items-center z-20">
        <img src={questionMark} alt="?" />
        <h4>شما در اکانت خود هستید</h4>
        <p className="body-sm">آیا میخواهید از اکانت خود خارج شوید؟</p>
        <div className="flex flex-row gap-10 mt-10">
          <button
            className="border border-error rounded-lg 2xs:w-[80px]  xs:w-[100px] h-[50px] bg-crimson text-white"
            onClick={() => logoutHandler()}
          >
            خارج شو
          </button>
          <button
            className="border border-neon-green rounded-lg 2xs:w-[80px] xs:w-[100px]  h-[50px] bg-dark-green text-white"
            onClick={() => navigate('/')}
          >
            ادامه میدهم
          </button>
        </div>
      </div>
    </div>
  )
}

export default LogoutModal
