import { IoPersonSharp } from "react-icons/io5"

interface AvatarProps {
  src?: string
  alt?: string
  children?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

function Avatar({ src, alt, children }: AvatarProps) {
  if (src) {
    return (
      <div className="avatar">
        <img src={src} alt={alt} />
      </div>
    )
  }

  if (children) {
    return (
      <div className="avatar avatar-icon">
        {children}
      </div>
    )
  }

  return (
    <div className="avatar avatar-icon">
      <IoPersonSharp />
    </div>
  )
}

export default Avatar
