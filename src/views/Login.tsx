import { LoginForm } from '@/components/LoginForm/LoginForm.tsx'
import { AuthLayout } from '@/layouts/AuthLayout/AuthLayout.tsx'

export const Login = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}
