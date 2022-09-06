import "./App.css";
import { useState } from "react";
import Counter from "./Components/Counter/Counter";
import CicloVida from "./Components/CicloVida/CicloVida";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  const [validacion, setValidacion] = useState(false);
  const validar = () => {
    setValidacion(!validacion);
  };
  <div className="App">
    <header className="App-header">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a TP Mayorista"} />
      <h2> This is a function component</h2>
      <CicloVida validacion={validacion} />
      <button onCLick={validar}>Actualizo el State</button>
      <Counter />
    </header>
  </div>;
}
export default App;
