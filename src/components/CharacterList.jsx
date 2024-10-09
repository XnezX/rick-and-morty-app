import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import './CharacterList.css';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchCharacters();
    }, [page]);

    const fetchCharacters = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
            setCharacters(res.data.results);
        } catch (err) {
            setError('Error al obtener los personajes.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading && <Loader />}
            {error && <p>{error}</p>}
            <div className="character-grid">
                {characters.map((character) => (
                    <div key={character.id} className={`character-card ${character.species.toLowerCase()}`}>
                        <img src={character.image} alt={character.name} />
                        <div className="info">
                            <h3>{character.name}</h3>
                            <p>Status: {character.status}</p>
                            <p>Especie: {character.species}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Anterior</button>
                <button onClick={() => setPage(page + 1)}>Siguiente</button>
            </div>
        </div>
    );
};

export default CharacterList;







