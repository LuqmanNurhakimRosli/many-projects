import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

function Button({ children, ...rest }: ButtonProps) {
  return (
    <button 
      {...rest}
      className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:shadow-md"
    >
      {children}
    </button>
  )
}

export default Button
