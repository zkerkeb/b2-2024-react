import './App.css';
// import Counter from './components/counter';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import Routes from './config/routes';
import { themeDark, themeLight } from './config/theme';

function App() {
  const [theme, setTheme] = useState('light')
  const [selectedPokemon, setSelectedPokemon] = useState({})
//   const [cards, setCards] = useState([])

//   const handleSubmit = (e, formPoke) => {
//     e.preventDefault()
//     axios({
//         method: 'POST',
//         url: 'http://localhost:3001/cards',
//         data: formPoke
//     }).then((response) => {
//         console.log(response.data)
//     }
//     ).catch((error) => {
//         console.error(error)
//         alert('Une erreur est survenue lors de la création de la carte')
//     })
// }
// const handleSubmitPut = (e, formPoke) => {
//   console.log("🚀 ~ handleSubmitPut ~ formPoke:", formPoke)
//   e.preventDefault()
//   axios({
//       method: 'PUT',
//       url: `http://localhost:3001/cards/${formPoke.id}`,
//       // url: "http://localhost:3001/cards/"+ formPoke.id, // A Ne pas faire
//       data: formPoke
//   }).then((response) => {
//       console.log('PUT',response.data)
//       setCards(response.data)
//   }
//   ).catch((error) => {
//       console.error(error)
//       alert('Une erreur est survenue lors de la création de la carte')
//   })
// }

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
      <Toaster></Toaster>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
