import Item from "../Item/Item";
import "./list-container.css";

const ItemList = ({ lista }) => {
  return (
    <div className="list-container">
      <div>
        {lista.map((product) => {
          return (
            <Item
              className="items"
              key={product.id}
              nombre={product.nombre}
              precio={product.precio}
              imagen={product.imagen}
              stock={product.stock}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
