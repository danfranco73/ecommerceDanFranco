import Item from "../Item/Item";
import "./list-container.css";
import { Link } from "react-router-dom";

const ItemList = ({ lista }) => {
  console.log(ItemList);
  return (
    <div >
      <div>
        {lista.map((product) => (
          <Link
            key={product.id}
            to={`/detail/${product.id}`}
            style={{ textDecoration: "none" }}
          >
              <Item
                nombre={product.nombre}
                precio={product.precio}
                imagen={product.imagen}
                categoria={product.categoria}
                stock={product.stock}
              />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
