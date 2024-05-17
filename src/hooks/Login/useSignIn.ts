import { useState } from 'react'

import { AuthService } from '@/services/auth.service.ts'

export const useSignIn = () => {
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const signIn = async (email: string, password: string) => {
    setLoading(true)

    const { data, error } = await AuthService.login(email, password)

    setLoading(false)

    if (error) {
      setErrorMessage(error.message)
      return null
    }

    setSuccessMessage('Logged in successfully')
    return data
  }

  return {
    loading,
    successMessage,
    errorMessage,
    signIn
  }
}
