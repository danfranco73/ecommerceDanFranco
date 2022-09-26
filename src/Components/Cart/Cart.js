import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, clear, removeItem } = useContext(CartContext);
  return (
    <div className="cart-box">
      <Link to="/">
        <button className="btn btn-primary btn-sm">Volver</button>
      </Link>
      <h1> Mis Compras </h1>
      {cart.length === 0 ? (
        <div className="cart-item">
          <h2>No hay Items Seleccionados</h2>
        </div>
      ) : (
        <div className="cart-inside">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(item.id)}
                >
                  x
                </button>
                <img
                  className="img-sku-cart"
                  src={item.imagen}
                  alt={item.nombre}
                />
              </div>
              <p className="desc-sku">{item.quantity} </p>
              <br />
              <p className="display-sku">{item.nombre}</p>
            </div>
          ))}
          <div className="cart-total">
            <h3>
              Total: ${cart.reduce((a, b) => a + b.precio * b.quantity, 0)}
            </h3>
          </div>
          <button className="btn btn-danger btn-sm" onClick={clear}>
            Vaciar Carrito
          </button>
          <button className="btn btn-primary btn-sm">Finalizar Compra</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
