import { createBrowserRouter } from 'react-router-dom'

import { CreateAccount } from '@/views/CreateAccount'
import { Login } from '@/views/Login'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/create-account',
    element: <CreateAccount />
  }
])
