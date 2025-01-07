import { ThemeContext } from "../App"
function ButtonContext() {
  const {theme, toggleTheme} = React.useContext(ThemeContext)
  return (
    <button className={`${theme}-theme`} >
        Switch Theme
    </button>
  )
}

export default ButtonContext
