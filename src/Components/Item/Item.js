import "./items.css";
import Counter from "../Counter/Counter";


const Item = ({ nombre, precio, imagen, stock }) => {
  return (
    <div className="items">
      <img className="img-sku" src={imagen} alt={nombre} />
      <h2 className="desc-sku">{nombre}</h2>
      <h3 className="precio-sku">$ {precio}</h3>
      <Counter sku={stock} />
    </div>
  );
};

export default Item;
