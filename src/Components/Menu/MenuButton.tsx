import Button from "../Button"
import React from "react"

function MenuButton({children, toggle}: {children: React.ReactNode, toggle: () => void}) {
  return (
    <div>
      <Button onClick={toggle}>{children}</Button>
    </div>
  )
}

export default MenuButton
