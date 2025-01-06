import React, { useState} from 'react'

function Menu({children}: {children: React.ReactNode}) {
const [open, setOpen] = useState(true)

const MenuContext = React.useContext()

function toggle() {
    setOpen(!open)
}

  return (
    <MenuContext value={false}>
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, {
            open,
            toggle
        })
      } )}
    </div>
    </MenuContext>
  )
}



export default Menu
export { MenuContext }