import axios from 'axios'
import { useEffect } from 'react'
import styled from 'styled-components'
import Card from '../card'

const ListPokemon = ({setSelectedPokemon, setCards, cards}) => {

    useEffect(() => {
        axios({
            method: 'GET',
            url: "http://localhost:3001/cards"
        }).then((response) => {
            console.log(response.data)
            setCards(response.data)
        }).catch((error) => {
            console.error(error)
            alert('Une erreur est survenue lors de la récupération des cartes')
        }   )

    }, [])

    const handleDelete = (id) => {
        axios({
            method: 'DELETE',
            url: `http://localhost:3001/cards/${id}`
        }).then((response) => {
            console.log(response.data)
            setCards(response.data)
        }).catch((error) => {
            console.error(error)
            alert('Une erreur est survenue lors de la suppression de la carte')
        }   )
    }

    return (
        <div>
            <h1>List Pokemon</h1>
            {cards.length === 0 && <p>Aucune carte</p>}
            <AllCards>
            {cards.map((card) => {
                return (
                    <CardWrapper onClick={() => setSelectedPokemon({...card})}>
                    <Card card={card}/>
                    <button onClick={() => handleDelete(card.id)} >delete</button>
                    </CardWrapper>
                )

            })
        }
        </AllCards>
        </div>
    )
}

const CardWrapper = styled.div`
    margin-right: 12px;
    margin-bottom: 12px;
`
const AllCards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: ${(props) => props.theme.primaryColor};
    justify-content: center;
    padding: 24px;
`





export default ListPokemon