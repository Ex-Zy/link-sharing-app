import '@/components/Base/Button/Button.scss'

import type React from 'react'

interface Props {
  type: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  uiType?: 'primary' | 'secondary'
  disabled?: boolean
  variant?: 'block' | 'inline'
  className?: string
  onClick?: () => void
}

export const Button: React.FC<Props> = ({
  uiType = 'primary',
  variant = 'inline',
  ...props
}: Props) => {
  const btnClasses = `btn btn--${uiType} btn--${variant}`.trim()

  return (
    <button
      type={props.type}
      className={btnClasses}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
