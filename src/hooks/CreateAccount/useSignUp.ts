import { useState } from 'react'

import { AuthService } from '@/services/auth.service.ts'

export const useSignUp = () => {
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const signUp = async (email: string, password: string) => {
    setLoading(true)

    const { data, error } = await AuthService.signUp(email, password)

    setLoading(false)

    if (error) {
      setErrorMessage(error.message)
      return null
    }

    setSuccessMessage('Account created successfully')
    return data
  }

  return {
    loading,
    successMessage,
    errorMessage,
    signUp
  }
}
