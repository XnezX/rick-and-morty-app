// Aqui se agrega el loader para que la experiencia de usuario sea mejor 
import React from 'react';
import './Loader.css';
const Loader = () => {
    return (
    <div className="loader">
        <div className="spinner"></div>
        <p>Cargando...</p>
    </div>
    );
};

export default Loader;