import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    if (isInCart(product.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.product.id === product.id) {
          return {
            product: cartItem.product,
            quantity: cartItem.quantity + quantity,
          };
        } else {
          return cartItem;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };
  const isInCart = (id) => {
    return cart.some((cartItem) => cartItem.product.id === id);
  };
  const removeItem = (itemId) => {
    const newCart = cart.filter((cartItem) => cartItem.product.id !== itemId);
    setCart(newCart);
  };
  const clear = () => {
    setCart([]);
  };
  const getTotalItems = () => {
    return cart.reduce((acc, cartItem) => acc + cartItem.cantidad, 0);
  };
  const getTotalPrice = () => {
    return cart.reduce(
      (acc, cartItem) => acc + cartItem.product.price * cartItem.quantity,
      0
    );
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clear,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Compare this snippet from src\Pages\CartWidget\CartImg.js:
