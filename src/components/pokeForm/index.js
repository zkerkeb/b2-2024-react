import { useEffect, useState } from "react"

const PokeForm = ({selectedPokemon, handleSubmit}) => {
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

    useEffect(() => {
        setFormPoke({
            id: selectedPokemon.id,
            name: selectedPokemon.name,
            type: selectedPokemon.type,
            description: selectedPokemon.description,
            hp: selectedPokemon.hp,
            attack: selectedPokemon.attack,
            defense: selectedPokemon.defense,
            speed: selectedPokemon.speed,
            character: selectedPokemon.character
        })

    }, [selectedPokemon])

    const handleChanges = (e) => {
        setFormPoke({
            ...formPoke,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        console.log(formPoke)
    }, [formPoke])


  

    return (
        <div>
            <h1>PokeForm</h1>

            <form
            // onSubmit={handleSubmit} // que le envoye el formulario
            onSubmit={(e) => handleSubmit(e, formPoke)}
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