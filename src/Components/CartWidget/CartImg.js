import "./CartImg.css";
import cartlogo from "../../Components/img/shopping-cart-icon-.jpg";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartImg = () => {
  const {  getTotalItems } = useContext(CartContext);
    
  return (
    <div className="cart-img">
      <li className="navbar-brand">
        <img src={cartlogo} className="img" alt="logo" />
      </li>
      <div>
        {
          <span className="total-item">
            {getTotalItems() > 0 ? getTotalItems() : ""}
          </span>
        }
      </div>
    </div>
  );
};





export default CartImg;
