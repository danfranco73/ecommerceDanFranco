import "./App.css";
import NavBar from "./Components/NavBar";
/* import Counter from "./Components/Counter/Counter";
 */import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
/* import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
 */
function App() {
  return (
    <div className="App">
      <NavBar />
      <header class="App-header">
        {/*         <div class="body-page">
         */}{" "}
        <ItemListContainer />
{/*         <div>
          <Counter stock={stock} />
        </div>
 */}        {/*           <ItemDetailContainer />
         */}
        {/*         </div>
         */}{" "}
      </header>
    </div>
  );
}

export default App;
