import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import moment from "moment/moment";

export const Cart = () => {
  const { cart, clear, removeItem, getTotalPrice } = useContext(CartContext);

  const createOrder = () => {
    const db = getFirestore();
    /*   const order = collection(db, "orders"); */
    const order = {
      buyers: {
        name: "Juan",
        phone: "123456789",
        email: "juan@mail.com",
      },
      items: cart,
      date: moment().format("DD/MM/YYYY"),
      total: getTotalPrice(),
    };

    const query = collection(db, "orders");
    addDoc(query, order)
      .then(({ id }) => alert("Orden creada con el id: " + id))
      .catch((error) => alert("Error al crear la orden"));
  };

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
          {cart.map((item) =>
            item.quantity > 0 ? (
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
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <p className="desc-sku">{item.quantity} </p>
                <br />
                <p className="display-sku">{item.title}</p>
              </div>
            ) : (
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
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <p className="display-sku">{item.title}</p>
                &ensp;
                <p className="desc-sku">{item.quantity} </p>
              </div>
            )
          )}
          <div className="cart-total">
            <h3>Total: ${getTotalPrice()}</h3>
          </div>
          <button className="btn btn-danger btn-sm" onClick={clear}>
            Vaciar Carrito
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => [createOrder(), clear()]}
          to="/"
          >
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
