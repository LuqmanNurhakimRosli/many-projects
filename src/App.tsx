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
  const [text, setText] = React.useState('')
  const [list, setList] = React.useState([])

  function handleChange(e){
    setText(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    if(!text){
      return
    }
    setList(prevList => [...prevList, text])
    setText('')
  }

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
    <h2>React Project Ideas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={text}
          placeholder="Idea"
        />
        <button>Submit</button>
      </form>

      <ol>
        {list.map((item, i) => <li key={i}>{item}</li>)}
      </ol>
  );
}

export default App;
export { ThemeContext };