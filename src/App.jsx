import { useState } from "react";
import Guardar from "./components/Guardar";
import Personajes from "./components/Personajes"; // 👈 Importamos el componente

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Rick and Morty API</h1>
      <Guardar />
      <Personajes count={count} />
    </div>
  );
}

export default App;
