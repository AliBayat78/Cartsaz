import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import Swal, { SweetAlertResult } from 'sweetalert2'
import { useEffect } from 'react'

const SwalLoggedInModal = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    handleSwal()
  }, [])

  const handleSwal = async () => {
    Swal.fire({
      title: 'شما در اکانت خود هستید',
      text: 'آیا میخواهید خارج شوید؟',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'میخواهم خارج شوم',
      cancelButtonText: 'ادامه میدهم',
    }).then((result: SweetAlertResult<any>) => {
      if (result.isConfirmed) {
        logout()
        Swal.fire('خارج شدید', 'شما از اکانت خود خارج شدید', 'success')
        navigate('/')
      } else {
        navigate('/')
      }
    })

    return (
      <>
        <div className="w-screen h-screen"></div>
      </>
    )
  }
}

export default SwalLoggedInModal
