import { IoPersonSharp } from "react-icons/io5"
 
function Avatar({src, alt, children}) {
  return (
    <div>
        if(src){
            return (
                <div className="avatar">
                    <img src={src} alt={alt} />
                </div>
            )
        }
        if(src){
            return (
                <div className="avatar avatar-icon">
                    {children}
                </div>
            )
        }
        else{
            return (
                <div className="avatar avatar-icon">
                    <IoPersonSharp />
                </div>
            )
        }
    </div>
  )
}

export default Avatar
