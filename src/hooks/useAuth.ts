import { useNavigate } from 'react-router-dom'
import { useAuthReturnType } from './../models/models'
import { useState } from 'react'
import { UserInfo } from '../models/models'
import Swal from 'sweetalert2'

export const useAuth = (): useAuthReturnType => {
  const [userCredentials, setUserCredentials] = useState<UserInfo | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | undefined>()
  const navigate = useNavigate()

  const login = (data: UserInfo) => {
    // Check if the username and password match any user in localStorage
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    console.log(user)

    if (user !== null && user.Username === data.Username) {
      if (user.Username === data.Username && user.Password === data.Password) {
        setUserCredentials(user)
        localStorage.setItem('currentUser', JSON.stringify(user))
        Swal.fire({
          title: 'خوش آمدید',
          text: 'با موفقیت وارد شدید',
          icon: 'success',
          confirmButtonText: 'ادامه',
        })
        navigate('/')
      } else {
        // Incorrect username or password
        setErrorMessage('نام کاربری یا رمز عبور صحیح نیست')
      }
    } else {
      // No user found in localStorage
      setErrorMessage('کاربری با این مشخصات پیدا نشد')
      Swal.fire({
        title: 'یافت نشد!',
        text: 'لطفا دوباره امتحان کنید',
        icon: 'error',
        confirmButtonText: 'باشه',
      })
    }
  }

  const logout = () => {
    setUserCredentials(null)
    localStorage.removeItem('currentUser')
  }

  return { userCredentials, login, logout, errorMessage }
}
