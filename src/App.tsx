import '@/styles/index.scss'
import 'react-toastify/dist/ReactToastify.css'

import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { router } from '@/router/router.tsx'

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}
