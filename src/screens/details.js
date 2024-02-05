
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Details = () => {
    const {id} = useParams()
    const [pokemon, setPokemon] = useState({})
  
    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:3001/cards/${id}`,
        }).then((response) => {
            console.log(response.data)
            setPokemon(response.data)
        }
        ).catch((error) => {
            console.error(error)
            alert('Une erreur est survenue lors de la récupération des cartes')
        })


    }, [id])


    return (
        <div>
            <h1>Details</h1>
            <div>
            <h1>{pokemon.name}</h1>
            <p>ID: {pokemon.id}</p>
            <p>Description: {pokemon.description}</p>
            <p>Type: {pokemon.type}</p>
            <p>HP: {pokemon.hp}</p>
            <p>Attack: {pokemon.attack}</p>
            <p>Defense: {pokemon.defense}</p>
            <p>Speed: {pokemon.speed}</p>
        </div>
        </div>
        
    );
}

export default Details;