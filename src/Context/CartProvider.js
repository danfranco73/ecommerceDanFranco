import { useState } from "react";
import { CartContext } from "./CartContext";


export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  
  const addToCart = (item, cantidad) => {
    if (isInCart(item.id)) {
        const newCart = cart.map((cartItem) => {
            if (cartItem.item.id === item.id) {
                return { item: cartItem.item, cantidad: cartItem.cantidad + cantidad };
            } else {
                return cartItem;
            }
        });
        setCart(newCart);
    } else {
        setCart([...cart, { item, cantidad }]);
    }
    };
    const isInCart = (id) => {
        return cart.some((cartItem) => cartItem.item.id === id);
    };
    const removeItem = (itemId) => {
        const newCart = cart.filter((cartItem) => cartItem.item.id !== itemId);
        setCart(newCart);
    };
    const clear = () => {
        setCart([]);
    };
    const getTotalItems = () => {
        return cart.reduce((acc, cartItem) => acc + cartItem.cantidad, 0);
    };
    const getTotalPrice = () => {
        return cart.reduce((acc, cartItem) => acc + cartItem.item.price * cartItem.cantidad, 0);
    };
    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, clear, getTotalItems, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

// Compare this snippet from src\Pages\CartWidget\CartImg.js:

 