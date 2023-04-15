import Swal from 'sweetalert2'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserInfo } from '../models/models'

export const useRegister = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<UserInfo>({
    Username: '',
    Password: '',
  })

  const registerUser = ({ Username, Password }: UserInfo) => {
    const userData = {
      Username,
      Password,
    }
    if (localStorage.getItem('user')) {
      Swal.fire({
        title: 'خطا',
        text: 'شما قبلا ثبت نام کرده اید',
        icon: 'error',
        confirmButtonText: 'باشه',
      })
    } else {
      try {
        localStorage.setItem('user', JSON.stringify(userData))
        setUser(userData)
        Swal.fire({
          title: 'ثبت نام موفقیت آمیز بود',
          text: 'مشخصات شما با موفقیت ثبت شد',
          icon: 'success',
          confirmButtonText: 'ادامه',
        })
        navigate('/login')
      } catch (error) {
        Swal.fire({
          title: 'خطا',
          text: 'ثبت نام موفقیت آمیز نبود',
          icon: 'error',
          confirmButtonText: 'باشه',
        })
        console.log(error)
      }
    }
  }
  return {
    user,
    registerUser,
  }
}
