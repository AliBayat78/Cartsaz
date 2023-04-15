import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const LogoutModal = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const logoutHandler = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-400 z-10">
      <div className="w-[600px] h-[200px] bg-white border border-silver rounded-lg flex flex-col justify-center items-center z-20">
        <h2>شما در اکانت خود هستید</h2>
        <p>آیا میخواهید از اکانت خود خارج شوید؟</p>
        <button onClick={() => logoutHandler()}>حارج شو</button>
        <button onClick={() => navigate('/')}>خیر</button>
      </div>
    </div>
  )
}

export default LogoutModal
