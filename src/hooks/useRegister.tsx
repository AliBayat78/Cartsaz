import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserInfo } from '../models/models'

const useRegister = () => {
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
    try {
      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return {
    user,
    registerUser,
  }
}

export default useRegister
