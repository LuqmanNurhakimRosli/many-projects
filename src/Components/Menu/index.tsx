import { ReactNode } from 'react'
import Menu from './Menu'
import MenuItem from './MenuItem'
import MenuButton from './MenuButton'
import MenuDropdown from './MenuDropDown'

// Define compound component interface
interface MenuComponent extends React.FC<{ children: ReactNode }> {
  Item: typeof MenuItem
  Button: typeof MenuButton
  Dropdown: typeof MenuDropdown
}

// Create compound component with proper typing
const MenuCompound = Menu as MenuComponent

// Attach sub-components
MenuCompound.Item = MenuItem
MenuCompound.Button = MenuButton
MenuCompound.Dropdown = MenuDropdown

export default MenuCompound