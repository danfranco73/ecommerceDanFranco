import Item from "../Item/Item";
import "../ItemList/list-container.css";

 
const ItemDetail = ({ lista }) => {
  return (
    <div className="list-container">
      <div>
        {lista.map((product) => {
          return (
            <Item
              className="items"
              key={product.id[1]}
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


        
        export default ItemDetail;
