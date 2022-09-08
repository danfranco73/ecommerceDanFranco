import { useState } from "react";

const Counter = (props) => {
  const [items, setItems] = useState(0);

  /*  const [initialState, setState] = useState(0); */
  console.log("Me renderizo otra vez");

  const suma = () =>
    items <= props.stock - 1
      ? setItems(items + 1)
      : alert("No hay mas stock disponible");

  const resta = () => {
    items >= 1 
      ? setItems(items - 1)
      : alert("Debe Pedir al menos 1 producto");
  };
  return (
    <>
      El stock es de {props.stock} unidades
      <button onClick={resta}>-</button>
      <div>{items}</div>
      <button onClick={suma}>+</button>
      Tengo {items} items.
    </>
  );
};

export default Counter;
