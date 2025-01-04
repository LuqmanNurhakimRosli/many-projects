import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
}

function Button({ children, ...rest }) {
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
