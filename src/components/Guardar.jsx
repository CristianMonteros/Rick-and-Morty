import { useState } from "react";

const Guardar = ({ setValor }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setValor(input);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleClick}>Guardar</button>
    </div>
  );
};

export default Guardar;
