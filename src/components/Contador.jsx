function Contador({ count, setCount }) {
  return (
    <div>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        placeholder="Escribe un nombre y presiona Buscar"
      />
    </div>
  );
}

export default Contador;

