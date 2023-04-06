import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/Error-page'
import ContactUsPage from './pages/Contact-us'
import Questions from './pages/Questions'

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
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="flex flex-col items-center w-screen h-screen overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
