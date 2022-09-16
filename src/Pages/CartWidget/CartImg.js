import "./CartImg.css";
import cartlogo from "../../Components/img/shopping-cart-icon-.jpg"

const CartImg = () => {
	return ( 
        <li className="navbar-brand">
            <img src={cartlogo} className="img" alt="logo" />
        </li>
    );
}
export default CartImg;