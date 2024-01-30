import './App.css';
// import Counter from './components/counter';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ListPokemon from './components/listPokemon';
import PokeForm from './components/pokeForm';
import TodoList from './components/todoList';
import { themeDark, themeLight } from './config/theme';

function App() {
  const [theme, setTheme] = useState('light')
  const [selectedPokemon, setSelectedPokemon] = useState({})
  const [cards, setCards] = useState([])

  const handleSubmit = (e, formPoke) => {
    e.preventDefault()
    axios({
        method: 'POST',
        url: 'http://localhost:3001/cards',
        data: formPoke
    }).then((response) => {
        console.log(response.data)
    }
    ).catch((error) => {
        console.error(error)
        alert('Une erreur est survenue lors de la création de la carte')
    })
}
const handleSubmitPut = (e, formPoke) => {
  console.log("🚀 ~ handleSubmitPut ~ formPoke:", formPoke)
  e.preventDefault()
  axios({
      method: 'PUT',
      url: `http://localhost:3001/cards/${formPoke.id}`,
      // url: "http://localhost:3001/cards/"+ formPoke.id, // A Ne pas faire
      data: formPoke
  }).then((response) => {
      console.log('PUT',response.data)
      setCards(response.data)
  }
  ).catch((error) => {
      console.error(error)
      alert('Une erreur est survenue lors de la création de la carte')
  })
}



  useEffect(() => {
    console.log('selectedPokemon',selectedPokemon)
  }, [selectedPokemon])

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
      {/* <Header cuicui="bonjour" cocoChannel={() => alert('coucou je suis une fonction')} nombre={34}  label="bonjour Paris" /> */}
      {/* <Header /> */}
      {/* <Counter /> */}
      <TodoList/>
      <ListPokemon setCards={setCards} cards={cards} setSelectedPokemon={setSelectedPokemon} />
      <PokeForm  handleSubmit={handleSubmitPut} selectedPokemon={selectedPokemon}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
