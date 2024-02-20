import axios from 'axios';
import { useEffect, useState } from 'react';

const PokeList = () => {
    const [pokemon, setPokemon] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        const limit = 2
        axios({
            method: 'GET',
            url: 'http://localhost:3001/cards',
            params: {
                limit: limit,
                offset: currentPage * limit
            }
        }).then((res) => {
          console.log("🚀 ~ useEffect ~ res:", res)
          setPokemon(res.data.data)
          setTotalPage(res.data.totalPages)
        }).catch((error) => {
            console.error(error)
        })
    }, [currentPage])

    const renderPages = () => {
        let pages = []

        for (let i = 1; i <= totalPage ; i++) {
            pages.push(<button key={i} onClick={() => setCurrentPage(i - 1)}>{i}</button>)
        }
        return pages
    }


    return (
        <div>
            <h1>PokeList</h1>
            <p>Nombre de pages: {totalPage}</p>
            {pokemon.map(poke => {
                return (
                    <div key={poke.id}>
                        <h2>{poke.name}</h2>
                        <p>{poke.description}</p>
                    </div>
                )
            }
            )}
            {renderPages()}
        </div>
        
    );
}

export default PokeList;