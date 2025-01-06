import Avatar from "./Components/Avatar"
import MenuItem from "./Components/Menu/MenuItem"
import Menu from "./Components/Menu/Menu"
import MenuDropdown from "./Components/Menu/MenuDropDown"
import MenuButton from "./Components/Menu/MenuButton"
import { ThemeProvider } from './Components/ThemeContext'

import './App.css'
function App() {
  const sports = ['Football', 'Basketball', 'Tennis', 'Golf', 'Hockey']
  return (
    <ThemeProvider>
      <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown>
        {sports.map(sport => (
          <MenuItem key={sport}>{sport}</MenuItem>
        ))}
      </MenuDropdown>
    </Menu>

      <Avatar src='../public/img/marketing_bg.jpg' alt='marketing_bg' />
      <br/>
      <Avatar>Marketing</Avatar>
      <br/>
      <Avatar  />
    </ThemeProvider>
  )
}

export default App
