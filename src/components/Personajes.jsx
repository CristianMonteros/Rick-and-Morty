function Personajes({ characters }) {
  return (
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
  );
}

export default Personajes;
