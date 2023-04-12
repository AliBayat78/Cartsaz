import logo from '../assets/logoes & images/vertical-logo.png'
import { Button } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { UserInfo } from '../models/models'
import { useAuth } from '../hooks/useAuth'
import { NavLink } from 'react-router-dom'
import { RTLTextField } from '../components/common/RtlTextField'
import Swal from 'sweetalert2'

const Login = () => {
  const [loginInfo, setLoginInfo] = useState<UserInfo>()

  const { login, errorMessage } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfo>()

  const onSubmit: SubmitHandler<UserInfo> = (data) => {
    try {
      login(data)
      setLoginInfo(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center 2xs:mt-10 mt-40">
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="Cartsaz Logo" />
        <h6 className="mt-8">ورود/ثبت نام فروشگاه</h6>
      </div>
      <div className="relative 2xs:w-[90vw] sm:w-[400px] flex flex-col justify-end items-center">
        <p className="w-full body-sm mt-10 relative right-0">
          جهت ورود به پنل خود ابتدا مشخصات زیر را وارد کنید:
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RTLTextField
            dir="rtl"
            {...register('Username', { required: 'نام کاربری خود را وارد کنید' })}
            sx={{ marginTop: '16px', width: '100%' }}
            label="نام کاربری"
            placeholder="Username"
            error={!!errors.Username}
            helperText={errors.Username?.message}
          />
          <RTLTextField
            dir="rtl"
            type="password"
            {...register('Password', { required: 'رمز عبور خود را وارد کنید' })}
            sx={{ marginTop: '16px', width: '100%' }}
            label="رمز عبور"
            placeholder="Password"
            error={!!errors.Password}
            helperText={errors.Password?.message}
          />
          <Button
            type="submit"
            sx={{ width: '100%', height: '56px', marginTop: '32px' }}
            variant="contained"
          >
            ورود
          </Button>
          {errorMessage && (
            <p className="text-error mt-2 2xs:mb-10 md:mb-2 body-sm">{errorMessage}</p>
          )}
        </form>
        <NavLink to="/register">
          <div className="2xs:w-[90vw] sm:w-[400px] h-[56px]">
            <Button
              type="submit"
              sx={{ width: '100%', height: '56px', marginTop: '16px', marginBottom: '16px' }}
              variant="contained"
            >
              ساخت اکانت
            </Button>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Login
