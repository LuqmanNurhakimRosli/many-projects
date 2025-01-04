import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: 'sm' | 'lg'
  className?: string
}

function Button({ children, size = 'sm', className = '', ...rest }: ButtonProps) {
  const sizeClass = size === 'lg' ? 'button-lg' : 'button-sm'

  return (
    <button 
      {...rest} 
      className={`flex items-center px-4 py-2 bg-white rounded-lg shadow hover:shadow-md ${sizeClass} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
