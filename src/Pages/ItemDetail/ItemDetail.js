import Item from "../../Components/Item/Item";
import "../../Components/ItemList/list-container.css";

const ItemDetail = ({ id, nombre, precio, imagen, stock, categoria }) => {
  console.log(ItemDetail);
  return (
    <div className="list-container text-focus-in">
      <div>
        <Item
          className="items"
          key={id}
          categoria={categoria}
          nombre={nombre}
          precio={precio}
          imagen={imagen}
          stock={stock}
        />

      </div>
    </div>
  );
};

export default ItemDetail;
