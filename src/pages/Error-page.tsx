import { useRouteError } from 'react-router-dom'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'

type RouteError = {
  status?: number
  statusText?: string
  message?: string
}

const ErrorPage = () => {
  const error = useRouteError() as RouteError
  console.log(error)

  return (
    <div className="flex flex-col justify-between items-center w-full h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center relative top-[40%]">
        <h1 className="text-error">
          {error.status === 404 ? 'صفحه مورد نظر پیدا نشد' : error.status}
        </h1>
        <h6 className="mt-4">متاسفانه مشکلی در درخواست شما بوجود آمده</h6>
        <p className="mt-4">
          <i>{error.statusText + ' error' || error.message}</i>
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default ErrorPage
