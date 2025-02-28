import { useState } from "react";
import Contador from "./components/Contador";
import Guardar from "./components/Guardar";

function App() {
  const [count, setCount] = useState("");

  return (
    <div>
      <h1>Rick and Morty</h1>
      <Contador setCount={setCount} />
      <Guardar count={count} />
    </div>
  );
}

export default App;

