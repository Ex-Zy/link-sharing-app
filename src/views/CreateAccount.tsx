import { CreateAccountForm } from '@/components/CreateAccountForm/CreateAccountForm'
import { AuthLayout } from '@/layouts/AuthLayout/AuthLayout.tsx'

export const CreateAccount = () => {
  return (
    <AuthLayout>
      <CreateAccountForm />
    </AuthLayout>
  )
}
