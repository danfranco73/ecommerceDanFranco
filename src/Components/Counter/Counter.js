import "./counter.css";

const Counter = ({stock,items,setItems}) => {


  const suma = () =>
    items <= stock - 1 ? setItems(items + 1) : alert("Stock insuficiente");

  const resta = () => {
    items > 0 ? setItems(items - 1) : alert("Debe Pedir al menos 1 producto");
  };
  return (
    <div>
      <div className="counter-app">
        <button onClick={resta}>-</button>
        <div>{items}</div>
        <button onClick={suma}>+</button>
      </div>
    </div>
  );
};

export default Counter;
