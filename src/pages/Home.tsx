import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import Main from '../components/Landing ui/Main'
import AuthenticatedHome from '../components/Landing ui/AuthenticatedHome'
import { isUserLoggedIn } from '../hooks/isUserLoggedin'

const Home = () => {
  const isLoggedIn = isUserLoggedIn()

  return (
    <>
      {isLoggedIn ? (
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
