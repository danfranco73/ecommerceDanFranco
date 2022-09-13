import { useState } from "react";
import "../../counter.css";

const Counter = (sku) => {
  const [items, setItems] = useState(0);

  /*  const [initialState, setState] = useState(0); */
  console.log("Me renderizo otra vez");

  const suma = (sku) =>
    items <= sku.stock - 1
      ? setItems(items + 1)
      : alert("Agotado");

  const resta = (sku) => {
    items >= sku.stock + 1 ? setItems(items - 1) : alert("Debe Pedir al menos 1 producto");
  };
  return (
    <div>
      <h6>Stock {sku.stock} unidades</h6>
      <div className= "counter-app">
        <button onClick={resta}>-</button>
        <div>{items}</div>
        <button onClick={suma}>+</button>
      </div>
    </div>
  );
};

export default Counter;
