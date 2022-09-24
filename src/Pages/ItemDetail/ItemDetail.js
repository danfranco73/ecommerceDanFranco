import Counter from "../../Components/Counter/Counter";
import "./itemDetail.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export const ItemDetail = ({ ...product }) => {
  const { addToCart } = useContext(CartContext);
  const [items, setItems] = useState(0);

  function onAdd(product) {
      addToCart(product, items);
  }

  return (
    <div className="box">
      <Link to="/">
        <button className="btn btn-primary">Volver</button>
      </Link>
      <div>
        <img className="img-sku" src={product.imagen} alt={product.nombre} />
      </div>
      <div className="detail-sku">
        <div className="items">
          <h2 className="desc-sku">Artículo: {product.nombre}</h2>
          <p className="desc-sku">Marca: {product.marca}</p>
          <p className="desc-sku">Categoría: {product.categoria}</p>
          <p className="desc-sku">Descripción: {product.descripcion}</p>
        </div>
        <div className="box2">
          <p className="precio-sku">${product.precio}</p>
          <p className="desc-sku">Stock: {product.stock} unidades</p>
          <span>
            <b>Total: ${items * product.precio}</b>
          </span>
          <div className="counter-detail">
            <Counter
              stock={product.stock}
              precio={product.precio}
              items={items}
              setItems={setItems}
            />
          </div>
          <div>
            {/* <Link to="/Carrito"> */}
              {items > 0 ? (
                <button
                  className="btn btn-success"
                  onClick={() => onAdd(product)}
                >
                  + carrito
                </button>
              ) : (
                <button className="btn btn-success" disabled hidden></button>
              )}
           {/*  </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
