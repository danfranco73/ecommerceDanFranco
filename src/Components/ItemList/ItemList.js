import Item from "../Item/Item";
import "./list-container.css";
import { Link } from "react-router-dom";

const ItemList = ({ lista }) => {


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
                nombre={product.title}
                imagen={product.image}
              />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
