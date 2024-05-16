import '@/components/Base/FormInput/FormInput.scss'

import type React from 'react'

interface Props {
  type: 'text' | 'password' | 'email' | 'number'
  value: string | number
  name: string
  icon?: React.ReactNode
  id?: string
  label?: string
  placeholder?: string
  isError?: boolean
  errorMessage?: string
  disabled?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const FormInput: React.FC<Props> = ({
  label,
  isError,
  errorMessage,
  icon,
  ...props
}: Props) => {
  const errorClass = isError ? 'input-field--error' : ''
  return (
    <div className="input-wrp">
      {label ? (
        <label htmlFor={props.id ?? props.name} className="input-label">
          {label}
        </label>
      ) : null}
      <div className="input-field-wrp">
        {icon ? <div className="input-icon">{icon}</div> : null}
        <input {...props} className={`input-field ${errorClass}`} />
        {isError ? <div className="input-error">{errorMessage}</div> : null}
      </div>
    </div>
  )
}
