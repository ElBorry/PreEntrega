import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { getCartQuantity } from "../utils";
import { CartContext } from "../context/CartProvider";

const CartWidget = () => {
    const {cart} = useContext(CartContext);

    const quantity = getCartQuantity(cart);

    return (
        <NavLink className="btn btn-primary position-relative"  to={'/cart'}>
        <i className="bi bi-cart-fill"></i>
            {quantity > 0 ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                +{quantity}
            </span> : null}
            
        </NavLink>
    );
};

export default CartWidget


