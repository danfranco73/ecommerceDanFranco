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
    setItems(items - 1);
  };
  return (
    <>
      El stock es de {props.stock} unidades
      <button onCLick={resta}>-</button>
      <div>{items}</div>
      <button onCLick={suma}>+</button>
      Tengo {items} items.
    </>
  );
};

export default Counter;
