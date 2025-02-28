import { useEffect, useState } from "react";

// Función para generar 5 números aleatorios entre 1 y 826
const generarNumerosAleatorios = () => {
  const numeros = new Set();
  while (numeros.size < 5) {
    numeros.add(Math.floor(Math.random() * 826) + 1);
  }
  return Array.from(numeros);
};

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      const numerosAleatorios = generarNumerosAleatorios();
      const url = `https://rickandmortyapi.com/api/character/${numerosAleatorios.join(",")}`;

      try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        setPersonajes(datos);
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
      }
    };

    obtenerPersonajes();
  }, []);

  return (
    <div>
      <h2>Personajes Aleatorios</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {personajes.map((personaje) => (
          <div key={personaje.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
            <img src={personaje.image} alt={personaje.name} width="150" />
            <h3>{personaje.name}</h3>
            <p>Género: {personaje.gender}</p>
            <p>Especie: {personaje.species}</p>
            <p>Estado: {personaje.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personajes;
