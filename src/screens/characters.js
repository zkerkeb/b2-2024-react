import axios from "axios";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";

const Characters = (props) => {
    console.log("🚀 ~ Characters ~ props:", props)
    const navigate = useNavigate();
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:3001/cards',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        }).then((response) => {
            setIsLoading(false)
            toast.success('Liste des personnages récupérée')
            console.log(response.data)
            setCards(response.data)
        }
        ).catch((error) => {
            setIsLoading(false)
            toast.error('Une erreur est survenue lors de la récupération de la liste des personnages')
            console.error(error)
            console.error(error.response.status)
            if (error.response.status === 401 || error.response.status === 403) {
                localStorage.removeItem('token')
                navigate('/')
            }

        })
    }, 4000)
    }
    
    , [])

    return (
        <div>
            <h1>Characters</h1>
            <Link to="/">Login</Link>
            {isLoading ? <p>Chargement en cours...</p> : null}
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