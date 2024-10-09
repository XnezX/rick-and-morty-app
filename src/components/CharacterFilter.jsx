import React from 'react';
// Definimos componente CharacterFilter que recibe una función 'onFilter'
const CharacterFilter = ({ onFilter }) => {
    const handleFilterChange = (e) => {
    onFilter(e.target.value);
    };

    return (
    <div>
        <input type="text" placeholder="Buscar personaje..." onChange={handleFilterChange} />
    </div>
    );
};

export default CharacterFilter;
