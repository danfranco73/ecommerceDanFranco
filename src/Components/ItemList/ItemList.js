import Item from "../Item/Item";
import "./list-container.css";
import { Link } from "react-router-dom";

const ItemList = ({ lista }) => {
  console.log(ItemList);
  return (
    <div className="list">
      <div className="prod">
        {lista.map((product) => (
          <Link
            key={product.id}
            to={`/detail/${product.id}`}
            style={{ textDecoration: "none" }}
          >
              <Item
                nombre={product.nombre}
                imagen={product.imagen}
              />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
