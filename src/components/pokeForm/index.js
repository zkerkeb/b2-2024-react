import axios from 'axios'
import { useEffect, useState } from "react"

const PokeForm = () => {
    const [formPoke, setFormPoke] = useState({
        name: '',
        type: '',
        description: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        character: ''
    })

    const handleChanges = (e) => {
        setFormPoke({
            ...formPoke,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        console.log(formPoke)
    }, [formPoke])


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
        console.log(formPoke)
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


    return (
        <div>
            <h1>PokeForm</h1>

            <form
            onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}
            >
                <input type="text" 
                value={formPoke.name}
                onChange={handleChanges}
                name="name"
                placeholder="Nom du pokémon" />
                <input type="text"
                value={formPoke.type}
                onChange={handleChanges}
                name="type"
                placeholder="Type du pokémon" />
                <input type="text"
                value={formPoke.description}
                onChange={handleChanges}
                name="description"
                placeholder="Description du pokémon" />
                <input type="number" 
                value={formPoke.hp}
                onChange={handleChanges}
                name="hp"

                placeholder="HP du pokémon" />
                <input type="number" 
                value={formPoke.attack}
                onChange={handleChanges}
                name="attack"
                placeholder="Attaque du pokémon" />
                <input type="number" 
                value={formPoke.defense}
                onChange={handleChanges}
                name="defense"
                placeholder="Défense du pokémon" />
                <input type="number" 
                value={formPoke.speed}
                onChange={handleChanges}
                name="speed"
                placeholder="Vitesse du pokémon" />
                <input type="text" 
                value={formPoke.character}
                onChange={handleChanges}
                name="character"
                placeholder="Caractere du pokemon" />
                <button type="submit">Ajouter un pokémon</button>
            </form>
        </div>
    )
}

export default PokeForm