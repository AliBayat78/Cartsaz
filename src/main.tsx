import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/Error-page'
import ContactUsPage from './pages/Contact-us'
import Questions from './pages/Questions'
import Register from './pages/Register'
import Login from './pages/Login'
import { Provider } from 'react-redux'
import { store, useAppSelector } from './redux/store/store'
import Profile from './pages/Profile/Profile'
import CallInformation from './pages/Profile/children routes/call-info'
import VitrinProducts from './pages/Profile/children routes/vitrin-products'
import VitrinSetting from './pages/Profile/children routes/vitrin-setting'
import QRcode from './pages/Profile/children routes/QRcode'
import PersonalVitrin from './pages/Profile/children routes/personalVitrin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/contact-us',
    element: <ContactUsPage />,
  },
  {
    path: '/questions',
    element: <Questions />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/profile/vitrin-products',
    element: <VitrinProducts />,
  },
  {
    path: '/profile/vitrin-setting',
    element: <VitrinSetting />,
  },
  {
    path: '/profile/call-info',
    element: <CallInformation />,
  },
  {
    path: '/profile/QRcode',
    element: <QRcode />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="flex flex-col items-center w-screen h-screen overflow-x-hidden">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>,
)
