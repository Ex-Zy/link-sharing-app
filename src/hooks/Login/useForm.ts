import { useFormik } from 'formik'

import { validationSchema } from '@/components/LoginForm/validationSchema.ts'
import { useSignIn } from '@/hooks/Login/useSignIn.ts'

export const useForm = () => {
  const { loading, errorMessage, successMessage, signIn } = useSignIn()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      const { email, password } = values
      await signIn(email, password)
    }
  })

  return { formik, loading, errorMessage, successMessage }
}
