import Counter from "../../Components/Counter/Counter";
import "../../Components/Item/items.css";

const ItemDetail = ({ id, nombre, precio, imagen, stock, categoria }) => {
  return (
    <div className="items">
      key={id}
      <img className="img-sku" src={imagen} alt={nombre} />
      <h2 className="desc-sku">{nombre}</h2>
      <h3 className="precio-sku">$ {precio}</h3>
      <h3 className="precio-sku">Stock: {stock}</h3>
      <h3 className="precio-sku">Categoria: {categoria}</h3>
      <Counter stock={stock} />
    </div>
  );
};

export default ItemDetail;
