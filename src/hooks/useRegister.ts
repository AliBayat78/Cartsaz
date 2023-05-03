import { useAppSelector } from './../redux/store/store'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserInfo } from '../models/models'
import { addUser } from '../redux/store/features/registerSlice'

export const useRegister = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<UserInfo>({
    Username: '',
    Password: '',
    VitrinUrl: '',
  })
  const id = useId()

  const dispatch = useDispatch()
  const registeredUser = useAppSelector((state) => state.register)

  const registerUser = ({ Username, Password }: UserInfo) => {
    const userData = {
      Username,
      Password,
      VitrinUrl: `${window.location.origin}/profile/${Username}?${id}`,
    }

    const isUserAlreadyRegistered =
      registeredUser.length > 0 && registeredUser.filter((user) => user.Username === Username)

    if (isUserAlreadyRegistered) {
      Swal.fire({
        title: 'خطا',
        text: 'شما قبلا ثبت نام کرده اید',
        icon: 'error',
        showDenyButton: true,
        confirmButtonText: 'برو به صفحه ورود',
        denyButtonText: 'باشه',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        } else if (result.isDenied) {
          return
        }
      })
    } else {
      try {
        dispatch(addUser(userData))
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
