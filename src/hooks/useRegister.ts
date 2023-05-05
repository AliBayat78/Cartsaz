import { useAppDispatch, useAppSelector } from './../redux/store/store'
import Swal from 'sweetalert2'
import { useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterInputs } from '../models/models'
import { addUser } from '../redux/store/features/registerSlice'

export const useRegister = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<RegisterInputs>({
    User: {
      Username: '',
      Password: '',
      VitrinUrl: '',
    },
    fullName: '',
    instagram: '',
    shopName: '',
    shopType: '',
    email: '',
    address: '',
    postCode: '',
  })
  const id = useId()

  const dispatch = useAppDispatch()
  const registeredUser = useAppSelector((state) => state.register)

  const registerUser = (props: RegisterInputs) => {
    const { fullName, User, instagram, shopName, shopType, email, address, postCode } = props

    const userData = {
      User: {
        Username: User.Username,
        Password: User.Password,
        VitrinUrl: `${window.location.origin}/profile/${User.Username}?${id}`,
      },
      fullName,
      instagram,
      shopName,
      shopType,
      email,
      address,
      postCode,
    }

    const isUserAlreadyRegistered =
      registeredUser.length > 0 &&
      registeredUser.filter((user) => user.User.Username === User.Username)

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
