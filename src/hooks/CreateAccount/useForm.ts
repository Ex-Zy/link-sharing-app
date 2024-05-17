import { useFormik } from 'formik'

import { validationSchema } from '@/components/CreateAccountForm/validationSchema.ts'
import { useSignUp } from '@/hooks/CreateAccount/useSignUp.ts'

export const useForm = () => {
  const { loading, errorMessage, successMessage, signUp } = useSignUp()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      const { email, password } = values

      await signUp(email, password)
    }
  })

  return {
    formik,
    loading,
    errorMessage,
    successMessage
  }
}
