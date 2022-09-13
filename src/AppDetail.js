import "./App.css";
import NavBar from "./Components/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function AppDetail() {
  return (
    <div className="App">
      <NavBar />
      <header class="App-header">
        <div class="body-page">
          <ItemDetailContainer />
        </div>
      </header>
    </div>
  );
}

export default AppDetail;