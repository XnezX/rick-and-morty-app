import React, { useState } from 'react';
import './Login.css'; // Importa el CSS del login

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
    if (username === 'Dani' && password === '12345') {
        onLogin();
    } else {
        setError('Usuario o contraseña incorrectos');
    }
    };

    return (
    <div className="login-container">
        <div className="login-form">
        <h2>Accede a personajes y su especie.</h2>
        <input type="text" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Acceder</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    </div>
    );
};

export default Login;
