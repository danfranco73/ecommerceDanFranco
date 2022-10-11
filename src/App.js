import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
import CategoryItems from "./Components/CategoryItems/CategoryItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartProvider";
import Cart from "./Components/Cart/Cart";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <header>
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer />}/>
              <Route path="category/:categoryId" element={<CategoryItems />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="login" element={<div>Página de Login</div>} />
              <Route path="contact" element={<div>Página de Contacto</div>} />
              <Route path="FAQ" element={<div>PreguntasFrecuentes</div>} />
              <Route path="/FB" element={<div>Página de Facebook</div>} />
              <Route path="/Cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
