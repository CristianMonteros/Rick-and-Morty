import { useState } from "react";

const Contador = ({ setCount }) => {
  const [valor, setValor] = useState("");

  const manejarCambio = (e) => {
    setValor(e.target.value);
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    const numero = parseInt(valor, 10);
    if (!isNaN(numero)) {
      setCount(numero);
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input 
        type="number" 
        value={valor} 
        onChange={manejarCambio} 
        placeholder="Ingrese un número" 
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Contador;
