import "../../App.css"
import cartlogo from "../img/shopping-cart-icon-.jpg"

const CartImg = () => {
	return ( 
        <li>
            <img src={cartlogo} className="navbar-brand" alt="logo" />
        </li>
    );
}
export default CartImg;