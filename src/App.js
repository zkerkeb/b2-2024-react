import './App.css';
// import Counter from './components/counter';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/header';
import ListPokemon from './components/listPokemon';
import { themeDark, themeLight } from './config/theme';


function App() {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeProvider theme={ theme === 'light' ? themeLight : themeDark}>
      <button
        onClick={() => {
          if (theme === 'light') {
            setTheme('dark')
          } else {
            setTheme('light')
          }
        }}
      >Switch Theme</button>
    <div>
      <Header label="bonjour Paris" />
      {/* <Counter /> */}
      {/* <TodoList/> */}
      <ListPokemon />
      {/* <PokeForm/> */}
    </div>
    </ThemeProvider>
  );
}

export default App;
