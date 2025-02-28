import { useState, useEffect } from "react";

function Guardar({ count }) {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    if (!count) return; 

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${count}`);
      const data = await response.json();

      if (data.results) {
        setCharacters(data.results);
      } else {
        setCharacters([]);
      }
    } catch (error) {
      console.error("Error al obtener los personajes:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchCharacters}>Buscar</button>
      <div>
        {characters.length > 0 ? (
          characters.map((char) => (
            <div key={char.id}>
              <h2>{char.name}</h2>
              <img src={char.image} alt={char.name} />
              <p>Género: {char.gender}</p>
              <p>Especie: {char.species}</p>
              <p>Estado: {char.status}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron personajes</p>
        )}
      </div>
    </div>
  );
}

export default Guardar;
