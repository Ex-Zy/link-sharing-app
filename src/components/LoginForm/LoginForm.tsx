import '@/components/LoginForm/LoginForm.scss'

import { useFormik } from 'formik'

import { Button } from '@/components/Base/Button/Button.tsx'
import { FormInput } from '@/components/Base/FormInput/FormInput.tsx'
import { validationSchema } from '@/components/LoginForm/validationSchema.ts'

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values, actions) => {
      console.log(values, actions)
    }
  })

  return (
    <form className="login-form" onSubmit={formik.handleSubmit}>
      <h1 className="login-form__title heading-m">Login</h1>
      <p className="login-form__subtitle body-m">Add your details below to get back into the app</p>
      <div className="login-form__divider" />
      <FormInput
        type="email"
        name="email"
        label="Email address"
        placeholder="e.g. alex@email.com"
        id="email"
        icon={<img src="src/assets/icons/icon-email.svg" alt="Email" />}
        isError={!!(formik.touched.email && formik.errors.email)}
        errorMessage={formik.errors.email}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <FormInput
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your password"
        id="password"
        icon={<img src="src/assets/icons/icon-password.svg" alt="Password" />}
        isError={!!(formik.touched.password && formik.errors.password)}
        errorMessage={formik.errors.password}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Button type="submit" variant="block" uiType="primary">
        Login
      </Button>
    </form>
  )
}
