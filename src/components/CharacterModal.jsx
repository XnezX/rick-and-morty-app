import React from 'react';

const CharacterModal = ({ character, onClose }) => (
    <div className="modal">
    <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p>Especie: {character.species}</p>
        <p>Género: {character.gender}</p>
        <p>Origen: {character.origin.name}</p>
    </div>
    </div>
);

export default CharacterModal;
