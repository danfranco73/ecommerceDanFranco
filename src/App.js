import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "./Pages/CartWidget/CartImg";
import ItemCategory from "./Pages/ItemCategory/ItemCategory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartProvider";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="category/:categoria" element={<ItemCategory />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="login" element={<div>Página de Login</div>} />
              <Route path="contact" element={<div>Página de Contacto</div>} />
              <Route path="FAQ" element={<div>PreguntasFrecuentes</div>} />
              <Route path="/FB" element={<div>Página de Facebook</div>} />
              <Route path="/Carrito" element={<CartWidget />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
