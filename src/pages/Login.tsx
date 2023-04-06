import logo from '../assets/logoes & images/vertical-logo.png'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { LoginInputs } from '../models/models'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInputs>()

  const { login, errorMessage } = useAuth()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>()

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    setLoginInfo(data)
    try {
      login(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center mt-40">
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="Cartsaz Logo" />
        <h6 className="mt-8">ورود/ثبت نام فروشگاه</h6>
      </div>
      <div className="relative w-[400px] flex flex-col justify-end items-center">
        <p className="w-full body-sm mt-10 relative right-0">
          جهت ورود به پنل خود ابتدا مشخصات زیر را وارد کنید:
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('Username', { required: 'نام کاربری خود را وارد کنید' })}
            sx={{ marginTop: '16px', width: '100%' }}
            id="demo-helper-text-aligned"
            label="نام کاربری"
            placeholder="Username"
            error={!!errors.Username}
            helperText={errors.Username?.message}
            multiline
          />
          <TextField
            {...register('Password', { required: 'پسورد خود را وارد کنید' })}
            type="password"
            sx={{ marginTop: '16px', width: '100%' }}
            id="demo-helper-text-aligned"
            label="پسورد"
            placeholder="Password"
            error={!!errors.Password}
            helperText={errors.Password?.message}
            multiline
          />
          <Button
            type="submit"
            sx={{ width: '100%', height: '56px', marginTop: '32px' }}
            variant="contained"
          >
            ورود
          </Button>
          {errorMessage && <p className="text-error mt-2 body-sm">{errorMessage}</p>}
        </form>
      </div>
    </div>
  )
}

export default Login
