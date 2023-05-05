import { useAppSelector } from './../redux/store/store'
import { useNavigate } from 'react-router-dom'
import { localStorageCurrentUser, useAuthReturnType } from './../models/models'
import { useState, useEffect } from 'react'
import { UserInfo } from '../models/models'
import Swal from 'sweetalert2'

export const useAuth = (): useAuthReturnType => {
  const [userCredentials, setUserCredentials] = useState<UserInfo | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | undefined>()
  const navigate = useNavigate()
  const registeredUser = useAppSelector((state) => state.register)

  const login = (data: UserInfo) => {
    const authenticateUsername =
      registeredUser.length > 0
        ? registeredUser.filter((user) => user.User.Username === data.Username)
        : false

    const authenticatePassword =
      registeredUser.length > 0
        ? registeredUser.filter((user) => user.User.Password === data.Password)
        : false

    const authenticatedUser =
      registeredUser.length > 0
        ? registeredUser.filter(
            (user) => user.User.Username === data.Username && user.User.Password === data.Password,
          )
        : []

    const userInfo: localStorageCurrentUser = {
      Username: authenticatedUser.length > 0 ? authenticatedUser[0].User.Username : '',
      VitrinUrl: authenticatedUser.length > 0 ? authenticatedUser[0].User.VitrinUrl : '',
    }

    const doesUsernameExist =
      registeredUser.length > 0 && authenticateUsername && authenticateUsername.length > 0

    const doesUsernameAndPasswordMatch =
      authenticateUsername &&
      authenticateUsername.length > 0 &&
      authenticatePassword &&
      authenticatePassword.length > 0

    if (doesUsernameExist) {
      if (doesUsernameAndPasswordMatch) {
        setUserCredentials({
          Username: authenticatedUser[0].User.Username,
          Password: authenticatedUser[0].User.Password,
          VitrinUrl: authenticatedUser[0].User.VitrinUrl,
        })
        localStorage.setItem('currentUser', JSON.stringify(userInfo))
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
