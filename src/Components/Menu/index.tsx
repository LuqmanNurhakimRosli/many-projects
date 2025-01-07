import Menu from './Menu'
import MenuItem from './MenuItem'
import MenuButton from './MenuButton'
import MenuDropdown from './MenuDropDown'

type MenuComponentType = typeof Menu & {
  Item: typeof MenuItem
  Button: typeof MenuButton
  Dropdown: typeof MenuDropdown
}

const MenuComponent = Menu as MenuComponentType

MenuComponent.Item = MenuItem
MenuComponent.Button = MenuButton
MenuComponent.Dropdown = MenuDropdown

export default MenuComponent