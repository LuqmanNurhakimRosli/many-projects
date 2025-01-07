import { ThemeContext } from "../App"
import React from "react"

function ButtonContext() {
  const {theme, toggleTheme} = React.useContext(ThemeContext)
  return (
    <button onClick={toggleTheme} className={`${theme}-theme`} >
        Switch Theme
    </button>
  )
}

export default ButtonContext
