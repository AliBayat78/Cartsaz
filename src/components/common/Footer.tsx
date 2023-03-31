import brushedLine from '../../assets/logoes & images/brushed-line.png'
import telegram from '../../assets/icons/telegram.png'
import instagram from '../../assets/icons/instagram.png'
import logo from '../../assets/logoes & images/logo.png'

const Footer = () => {
  return (
    <div className="flex flex-col relative bottom-0 w-[90%] mb-10 mt-16">
      <img src={brushedLine} />
      <div className="flex flex-row justify-between items-center mt-6">
        <div className="flex flex-row justify-center items-center">
          <img src={telegram} alt="Telegram" />
          <img src={instagram} alt="Instagram" />
        </div>
        <div className="flex flex-row justify-center items-center">
          <p className="mr-7">کارت ساز - ۱۴۰۴</p>
          <img src={logo} alt="CartSaz" />
        </div>
      </div>
    </div>
  )
}

export default Footer
