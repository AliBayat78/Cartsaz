import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import Main from '../components/Landing ui/Main'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
