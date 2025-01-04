import { ButtonHTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: 'sm' | 'lg'
  variant?: 'success' | 'warning' | 'danger'
}

function Button({ children, size, variant, className, ...rest }: ButtonProps) {
  const buttonClasses = classnames(
    'flex items-center px-4 py-2 bg-white rounded-lg shadow hover:shadow-md',
    size && `button-${size}`,
    variant && `button-${variant}`,
    className
  )

  return (
    <button {...rest} className={buttonClasses}>
      {children}
    </button>
  )
}

export default Button
