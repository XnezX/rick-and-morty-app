import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URLS } from '../apiUrls'; 

const LocationList = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1); // Para manejar la paginación, si es necesario

  useEffect(() => {
    fetchLocations();
  }, [page]);

  const fetchLocations = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URLS.locations}?page=${page}`);
      setLocations(res.data.results);
    } catch (err) {
      console.error(err);
      setError('Error al obtener las ubicaciones.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p>Cargando ubicaciones...</p>}
      {error && <p>{error}</p>}
      <div className="location-grid">
        {locations.map((location) => (
          <div key={location.id} className="location-card">
            <h3>{location.name}</h3>
            <p>Tipo: {location.type}</p>
            <p>Dimensión: {location.dimension}</p>
          </div>
        ))}
      </div>
      <button onClick={() => setPage(page > 1 ? page - 1 : 1)} disabled={page === 1}>Anterior</button>
      <button onClick={() => setPage(page + 1)}>Siguiente</button>
    </div>
  );
};

export default LocationList;
