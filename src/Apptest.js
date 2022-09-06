import "./App.css";
/* import Parent from "./Components/Parent/Parent";
import ClassComponent from "./Components/ClassComponent/ClassComponent"; */
import Counter from "./Components/Counter/Counter";
/* import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"; */

const Titulo = () => {
  return <h1> Hola Lucho</h1>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos a TP Mayorista"} />
        <Parent esUnComponente={Titulo}>
          {" "}
          {/* funcion parent */}
          <div>
            <h1>Esto es un children</h1>{" "}
            {/* si hay 1 solo div es un objeto y no un array */}
          </div>
          <div>
            <h2>Este el el hijo del childen</h2>
          </div>
        </Parent>
         <h2> This is a class component</h2>
        <ClassComponent  />
        <h2> This is a function component</h2>
        <Counter />
      </header>
    </div>
  );
}

export default App;
