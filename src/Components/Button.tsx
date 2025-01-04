import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:shadow-md"
    >
      {children}
    </button>
  )
}

export default Button
