import Avatar from "./Components/Avatar"
import MenuItem from "./Components/Menu/MenuItem"
import Menu from "./Components/Menu/Menu"
import MenuDropdown from "./Components/Menu/MenuDropDown"
import MenuButton from "./Components/Menu/MenuButton"
import './App.css'
import Header from "./Components/Header"
import ButtonContext from "./Components/ButtonContext"

const ThemeContext = React.createContext()

function App() {
  const sports = ['Football', 'Basketball', 'Tennis', 'Golf', 'Hockey']

  const [theme,setTheme] = React.useState('light')

  function toggleTheme()
  {
    setTheme(prevTheme => prevTheme === 'light'? 'dark' : 'light')
  }


  return (
    <>
      <ThemeContext.Provider value={{value, toggleTheme }} >
          <div className={`$(theme)-theme`} >
            <Header />
            <ButtonContext />
          </div>
      </ThemeContext.Provider>

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
    </>
  )
}

export default App
export { ThemeContext }
