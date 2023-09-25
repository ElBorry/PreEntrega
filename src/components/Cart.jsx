import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import { FaTrash } from 'react-icons/fa';
import styles from "./Cart.module.css"


const Cart = () => {
    const { cart, removeItem, clear } = useContext(CartContext);

    const isEmpty = cart.length === 0;

    const calculateTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };

    return (
        <div className={styles.window} >
            <h1 className="text-center mb-4 mt-4">Tu Compra</h1>
            <div className="container-fluid">
            {isEmpty ? (
                <div>
                    <p>Tu carrito está vacio!</p>
                    <NavLink to="/"><button> Ver productos  </button></NavLink>
                </div>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className="mt-4">
                                <div className="card" style={{width: "18rem"}}>    
                                    <img src={`/${item.imageId}`} alt={item.title} />
                                </div>
                               
                                <div>
                                    <h3>{item.title}</h3>
                                </div>
                                <div >
                                    <p>Precio: ${item.price}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <FaTrash onClick={() => removeItem(item.id)}  />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <div>
                            <p>Total: ${calculateTotal()}</p>
                        </div>
                        <button className="btn btn-danger ms-2" onClick={() => clear()}>Vaciar carrito</button>
                        <NavLink to="/checkout">
                            <button  className="btn btn-primary ms-2">Realizar compra</button>
                        </NavLink>
                        <Link to="/"><button className="btn btn-success ms-2" > Ver mas productos  </button></Link>
                    </div>
                </div>
                
            )}
            </div>
        </div>
    );
};

export default Cart;