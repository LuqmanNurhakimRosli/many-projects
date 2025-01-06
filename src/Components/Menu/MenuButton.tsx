import Button from "../Button"

function MenuButton({children, toggle}: {children: React.ReactNode, toggle: () => void}) {
  return (
    <div>
      <Button onClick={toggle}>{children}</Button>
    </div>
  )
}

export default MenuButton
