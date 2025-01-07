import React, { useState, createContext, useContext } from 'react'

interface MenuContextType {
  open: boolean
  toggle: () => void
}

const MenuContext = createContext<MenuContextType>({
  open: false,
  toggle: () => {}
})

export const useMenuContext = () => useContext(MenuContext)

function Menu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)


  const toggle = () => {
    setOpen(!open)
  }

  return (
    <MenuContext.Provider value={{ open, toggle }}>
      <div className="menu-container">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child as React.ReactElement, {
            open,
            toggle
          })
        })}
      </div>
    </MenuContext.Provider>
  )
}

export default Menu
export { MenuContext }