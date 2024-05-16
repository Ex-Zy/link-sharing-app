import { object, string } from 'yup'

export const validationSchema = object({
  email: string().required("Can't be empty").email('Invalid email'),
  password: string().required("Can't be empty").min(6, 'Minimum 6 characters')
})
