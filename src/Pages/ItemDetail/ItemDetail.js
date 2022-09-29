import Counter from "../../Components/Counter/Counter";
import "./itemDetail.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export const ItemDetail = ({product, nombre, precio, categoria, descripcion, imagen, stock}) => {
  const { addToCart, isInCart } = useContext(CartContext);
  const [items, setItems] = useState(0);

  function onAdd(product) {
    addToCart(product, items);
  }

  return (
    <div className="box flex-container">
      <div className="img-bt">
        <img className="img-sku" src={imagen} alt={nombre} />
        <Link to="/">
          <button className="btn btn-primary">Volver</button>
        </Link>
      </div>
      <div className="detail-sku">
        <div className="items">
          <h2 className="desc-sku">Artículo: {nombre}</h2>
          <p className="desc-sku">Categoría: {categoria}</p>
          <p className="desc-sku">Descripción: {descripcion}</p>
        </div>
        <div className="box2">
          <p className="precio-sku">${precio} c/u</p>
          <span>
            <b>Total: ${items * precio}</b>
          </span>
          <div className="counter-detail">
            <Counter
              stock={stock}
              precio={precio}
              items={items}
              setItems={setItems}
            />
          </div>
          <div>
            <Link to="/Cart">ir al Carrito</Link>
            {items > 0 ? (
              <button
                className="btn btn-success"
                onClick={isInCart(product.id)
                  ? () => alert("El producto ya está en el carrito")
                  : () => onAdd(product)}
              >
                + carrito
              </button>
            ) : (
              <button className="btn btn-success btn-sm" disabled hidden></button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
