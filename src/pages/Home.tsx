import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import Main from '../components/Landing ui/Main'
import AuthenticatedHome from '../components/Landing ui/AuthenticatedHome/AuthenticatedHome'
import { isUserLoggedIn } from '../hooks/isUserLoggedIn'
import { useEffect, useState } from 'react'
import { ColorRing } from 'react-loader-spinner'

const Home = () => {
  const isLoggedIn = isUserLoggedIn()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <ColorRing
            visible={true}
            height="120"
            width="120"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#0182FE', '#0182FE', '#60B1FE', '#DFEFFF', '#DFEFFF']}
          />
        </div>
      ) : isLoggedIn ? (
        <AuthenticatedHome />
      ) : (
        <div className="flex flex-col justify-center items-center w-full">
          <Navbar />
          <Main />
          <Footer />
        </div>
      )}
    </>
  )
}

export default Home
