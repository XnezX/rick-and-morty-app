import React, { useState } from 'react';
import Login from './components/Login';
import CharacterList from './components/CharacterList';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      {!isAuthenticated ? (
        <Login onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <CharacterList />
      )}
    </div>
  );
}

export default App;


