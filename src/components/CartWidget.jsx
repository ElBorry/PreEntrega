import { useContext } from "react";
import CartContext from "../context/CartContext";
import { getCartQuantity } from "../utils";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const quantity = getCartQuantity(cart);

  return ( 
  <div> 
    <button className="btn btn-primary position-relative">
    <i className="bi bi-cart2"> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{quantity > 0 ? quantity : ""} 
    </span><span className="visually-hidden"></span></i>
    </button>
    </div>
    ); 
};

export default CartWidget;


