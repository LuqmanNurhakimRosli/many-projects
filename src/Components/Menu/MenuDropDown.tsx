
function MenuDropDown({children, open}: {children: React.ReactNode, open: boolean}) {
  return open ? (
    <div>
      {children}
    </div>
  ) : null
}

export default MenuDropDown