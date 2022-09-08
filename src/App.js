import "./App.css";
import NavBar from "./Components/NavBar";
import Counter from "./Components/Counter/Counter";

import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";


function App() {
  const stock = 20
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer />
        <Counter stock = {stock}/>
      </header>
    </div>
  );
}

export default App;
