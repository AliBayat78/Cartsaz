import { useNavigate } from 'react-router-dom'
import { useAuthReturnType } from './../models/models'
import { useState } from 'react'
import { UserInfo } from '../models/models'

export const useAuth = (): useAuthReturnType => {
  const [userCredentials, setUserCredentials] = useState<UserInfo | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | undefined>()
  const navigate = useNavigate()

  const isAuthenticated = Boolean(userCredentials)

  const login = (data: UserInfo) => {
    // Check if the username and password match any user in localStorage
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    console.log(user)

    if (user !== null) {
      if (user.Username === data.Username && user.Password === data.Password) {
        setUserCredentials(user)
        localStorage.setItem('currentUser', JSON.stringify(user))
        navigate('/')
      } else {
        // Incorrect username or password
        setErrorMessage('نام کاربری یا رمز عبور صحیح نیست')
      }
    } else {
      // No user found in localStorage
      setErrorMessage('کاربری با این مشخصات پیدا نشد')
    }
  }

  const logout = () => {
    setUserCredentials(null)
    localStorage.removeItem('currentUser')
  }

  return { userCredentials, isAuthenticated, login, logout, errorMessage }
}
