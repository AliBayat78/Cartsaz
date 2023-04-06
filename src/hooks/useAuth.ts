import { useAuthReturnType } from './../models/models'
import { useState } from 'react'
import { LoginInputs, User } from '../models/models'

export const useAuth = (): useAuthReturnType => {
  const [userCredentials, setUserCredentials] = useState<User | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | undefined>()

  const isAuthenticated = Boolean(userCredentials)

  const login = (data: LoginInputs) => {
    const user = JSON.parse(localStorage.getItem('user') || 'null')

    if (user !== null) {
      const matchedUser = user.find((u: User) => {
        u.Username === data.Username && u.Password === data.Password
      })

      if (matchedUser) {
        setUserCredentials(matchedUser)
        localStorage.setItem('currentUser', JSON.stringify(matchedUser))
      } else {
        setErrorMessage('نام کاربری یا رمز عبور صحیح نیست')
      }
    } else {
      setErrorMessage('کاربری با این مشخصات پیدا نشد')
    }
  }

  const logout = () => {
    setUserCredentials(null)
    localStorage.removeItem('currentUser')
  }

  return { userCredentials, isAuthenticated, login, logout, errorMessage }
}
