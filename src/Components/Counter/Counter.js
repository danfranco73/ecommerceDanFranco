import { useState } from "react";
import "./counter.css";
import { Link } from "react-router-dom";

const stock = 10;
const Counter = () => {
  const [items, setItems] = useState(0);

  const suma = () =>
    items <= stock - 1 ? setItems(items + 1) : alert("Stock insuficiente");

  const resta = () => {
    items > 0 ? setItems(items - 1) : alert("Debe Pedir al menos 1 producto");
  };
  return (
    <div>
      <h6>Stock {stock} unidades</h6>
      <div className="counter-app">
        <button onClick={resta}>-</button>
        <div>{items}</div>
        <button onClick={suma}>+</button>
      </div>
      <div>
        <Link to="/Carrito">
          {items > 0 ? (
            <button className="btn btn-success">+ carrito</button>
          ) : (
            <button className="btn btn-success" disabled hidden></button>
          )}
        </Link>
      </div>      
    </div>
  );
};

export default Counter;
