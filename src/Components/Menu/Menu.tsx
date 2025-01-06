import React, { useState} from 'react'

function Menu({children}: {children: React.ReactNode}) {
const [open, setOpen] = useState(true)

function toggle() {
    setOpen(!open)
}

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, {
            open,
            toggle
        })
      } )}
    </div>
  )
}



export default Menu
