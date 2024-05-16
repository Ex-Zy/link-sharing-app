import '@/components/CreateAccountForm/CreateAccountForm.scss'

import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

import { Button } from '@/components/Base/Button/Button.tsx'
import { FormInput } from '@/components/Base/FormInput/FormInput.tsx'
import { validationSchema } from '@/components/CreateAccountForm/validationSchema.ts'

export const CreateAccountForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema,
    onSubmit: (values, actions) => {
      console.log(values, actions)
    }
  })

  return (
    <form className="create-account-form" onSubmit={formik.handleSubmit}>
      <h1 className="create-account-form__title heading-m">Create account</h1>
      <p className="create-account-form__subtitle body-m">
        Let’s get you started sharing your links!
      </p>
      <div className="create-account-form__divider" />
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
        label="Create password"
        placeholder="At least 8 characters"
        id="password"
        icon={<img src="src/assets/icons/icon-password.svg" alt="Password" />}
        isError={!!(formik.touched.password && formik.errors.password)}
        errorMessage={formik.errors.password}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <FormInput
        type="password"
        name="confirmPassword"
        label="Confirm password"
        placeholder="At least 8 characters"
        id="confirmPassword"
        icon={<img src="src/assets/icons/icon-password.svg" alt="Password" />}
        isError={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
        errorMessage={formik.errors.confirmPassword}
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <p>Password must contain at least 8 characters</p>
      <Button type="submit" variant="block" uiType="primary">
        Create new account
      </Button>
      <p className="create-account-form__footer body-m">
        Already have an account? &nbsp;
        <Link className="link" to="/login">
          Login
        </Link>
      </p>
    </form>
  )
}
