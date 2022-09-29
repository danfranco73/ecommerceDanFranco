import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Use this function to add items to the cart

  const addToCart = (product, quantity) => {
    if (isInCart(product.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === product.id) {
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

  // Use this to check if there is an item already in my cart

  const isInCart = (id) => {
    return cart.some((cartItem) => cartItem.id === id);
  };

  // Use this to remove an item from the cart

  const removeItem = (itemId) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(newCart);
  };

  // Use this to clear the cart

  const clear = () => {
    setCart([]);
  };

    // Use this to get the total quantity of items in the cart

  const getTotalItems = () => {
    return cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
  };

    // Use this to get the total price of items in the cart

  const getTotalPrice = () => {
    return cart.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
      0
    );
  };

  //Use this log to see the cart's itmes in the console

 /*  console.log(cart); */


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
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
