import '@/layouts/AuthLayout/AuthLayout.scss'

import type React from 'react'

import { Logo } from '@/components/Base/Logo.tsx'

interface Props {
  children: React.ReactNode
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <div className="auth-layout">
      <div className="auth-layout__in">
        <Logo />
        {children}
      </div>
    </div>
  )
}
