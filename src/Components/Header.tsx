import React from 'react'
import { ThemeContext } from '../App'

function Header() {
  const {theme} = React.useContext(ThemeContext)
  return (
    <header className={`${theme}-theme`} >
      <h1>{theme === 'light' ? 'dark' : 'light'}  Theme</h1>
    </header>
  )
}

export default Header
