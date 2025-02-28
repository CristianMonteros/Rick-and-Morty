import { useState } from "react";
import Guardar from "./components/Guardar";

function App() {
  const [valor, setValor] = useState("");

  return (
    <div>
      <h1>Rick and Morty Search</h1>
      <Guardar setValor={setValor} />
      <p>Buscando: {valor}</p>
    </div>
  );
}

export default App;
