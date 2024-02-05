import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Characters = (props) => {
    console.log("🚀 ~ Characters ~ props:", props)
    const navigate = useNavigate();
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:3001/cards',
        }).then((response) => {
            console.log(response.data)
            setCards(response.data)
        }
        ).catch((error) => {
            console.error(error)
            alert('Une erreur est survenue lors de la récupération des cartes')
        })
    }
    
    , [])

    return (
        <div>
            <h1>Characters</h1>
            <Link to="/">Login</Link>
            {
                cards.map((card, index) => {
                    return (
                        <div key={index}>
                            <h2>{card.name}</h2>
                            <p>{card.description}</p>
                            <button onClick={() => navigate(`/characters/${card.id}`)}>Voir</button>
                        </div>
                    )
                })
            }

        </div>
    );
}

export default Characters;