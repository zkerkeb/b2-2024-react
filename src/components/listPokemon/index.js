import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../card'

const ListPokemon = () => {
    const [cards, setCards] = useState([])

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

    return (
        <div>
            <h1>List Pokemon</h1>
            {cards.length === 0 && <p>Aucune carte</p>}
            <AllCards>
            {cards.map((card) => {
                return (
                    <CardWrapper>
                    <Card card={card}/>
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