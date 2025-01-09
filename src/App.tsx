import React from 'react';
import Avatar from './Components/Avatar';
import './App.css';
import Header from './Components/Header';
import ButtonContext from './Components/ButtonContext';
import Menu from  './Components/Menu/index'

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {}
});

function App() {
  const sports = ['Football', 'Basketball', 'Tennis', 'Golf', 'Hockey'];
  const [theme, setTheme] = React.useState('light');

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme}-theme`}>
        <Header />
        <ButtonContext />
        <Menu>
          <Menu.Button>Sports</Menu.Button>
          <Menu.Dropdown>
            {sports.map((sport) => (
              <Menu.Item key={sport}>{sport}</Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
        <Avatar src='/img/marketing_bg.jpg' alt='marketing_bg' />
        <br />
        <Avatar>Marketing</Avatar>
        <br />
        <Avatar />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };