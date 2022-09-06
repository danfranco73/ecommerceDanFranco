import {  useState } from "react";

const Counter = () => {
  const [initialState, setState] = useState(100);
  console.log("Me renderizo otra vez");
  const suma = () => {
    setState(initialState - 1);
  };
  const resta = () => {
    setState(initialState - 1);
  };
  return (
    <div>
      Contador
      <h3>{initialState}</h3>
      <button onCLick={resta}>-</button>
      <button onCLick={suma}>+</button>
    </div>
  );
};

export default Counter;
