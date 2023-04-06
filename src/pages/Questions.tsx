import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import registerBanner from '../assets/logoes & images/register-banner.png'
import registerBannerMobile from '../assets/logoes & images/register-banner-mobile.png'
import messageEdit from '../assets/icons/message-edit.png'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Questions = () => {
  return (
    <div className="mt-44 flex flex-col justify-between items-center w-full h-screen">
      <Navbar />
      <div className="w-full flex flex-col justify-end items-center">
        <h3 className="text-primary w-[90vw]">سوالات متداول</h3>
        <div style={{ direction: 'rtl' }}>
          <Accordion sx={{ borderRadius: '8px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="flex flex-row justify-center items-center">
                <div
                  style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                  className="w-2 h-2 bg-primary ml-2"
                ></div>
                <Typography>کارت ساز چیست و به چه کاری می آید؟</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم
                تکست
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: '8px', marginTop: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <div className="flex flex-row justify-center items-center">
                <div
                  style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                  className="w-2 h-2 bg-primary ml-2"
                ></div>
                <Typography>کارت ساز چطور به کسب و کار من کمک میکند؟</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم
                تکست
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: '8px', marginTop: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <div className="flex flex-row justify-center items-center">
                <div
                  style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                  className="w-2 h-2 bg-primary ml-2"
                ></div>
                <Typography>آیا کارت ساز رایگان است؟</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم
                تکست
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: '8px', marginTop: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <div className="flex flex-row justify-center items-center">
                <div
                  style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                  className="w-2 h-2 bg-primary ml-2"
                ></div>
                <Typography>راه های ارتباطی در کارت ساز چگونه است؟</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم
                تکست
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: '8px', marginTop: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <div className="flex flex-row justify-center items-center">
                <div
                  style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                  className="w-2 h-2 bg-primary ml-2"
                ></div>
                <Typography>آیا اطلاعات من محفوظ است؟</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم
                تکست
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: '8px', marginTop: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <div className="flex flex-row justify-center items-center">
                <div
                  style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                  className="w-2 h-2 bg-primary ml-2"
                ></div>
                <Typography>کارت ساز توسط چه کسانی اداره میشود؟</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم تکست لورم
                تکست
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      {/* register-banner */}
      <div className="mt-60 relative">
        <img className="hidden sm:flex w-screen h-[259px]" src={registerBanner} />
        <img className="sm:hidden w-screen h-[259px]" src={registerBannerMobile} />
        <div className="absolute z-1 top-0 right-[50%] translate-x-[50%] flex flex-col justify-center items-center">
          <h1
            style={{ direction: 'rtl' }}
            className="xs:mt-6 mt-10 text-center text-white w-[270px] sm:w-[450px] xl:w-[700px]"
          >
            هم اکنون ثبت نام کنید!
          </h1>
          <p className="mt-2 body-md text-white" style={{ direction: 'rtl' }}>
            ثبت نام در کارت ساز رایگان است.همین الان ثبت نام کنید و کارت ساز را تست کنید.
          </p>
          <button className="bg-secondary rounded-[32px] py-4 px-8 flex flex-row justify-center items-center 2xs:mt-4 xs:mt-2 gap-2">
            <span className="overline-lg text-white">ثبت نام رایگان</span>
            <img src={messageEdit} />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-start items-end mt-10 2xs:mr-4">
        <h4>
          <span className="text-primary ml-2">کارت ساز</span>
          چیست ؟
        </h4>
        <p className="mt-4 w-[85vw] body-md">
          کارت ساز یک سیستم نوین است که به شما اجازه میدهد برای مشتریان خود سبد خرید(cart) اختصاصی
          ایجاد کنید و سپس با ارسال لینک از آن ها بخواهید که سبد خرید خود را کامل کنند. در این حالت
          شما دیگر نیازی به یادداشت موارد خاسته شده ندارید و به راحتی میتوانید سفارشات خود را ثبت
          کنید.کارت ساز آمده تا زمان شما مدیریت شود , مشتریان خود را رهگیری کنید , سفارشات را طبقه
          بندی کنید.کارت ساز در ابتدای مسیر خود می باشد و قصدش کمک به کسب و کار های نوپا و کوچک بر
          بستر شبکه های اجتماعی همانند اینستاگرام,تلگرام و واتساپ می باشد.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Questions
