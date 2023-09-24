import { useContext, useState, useEffect } from "react";
import CartProvider from "../context/CartProvider";
import { serverTimestamp, getFirestore, collection, addDoc } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "../utils";
import { createOrder } from "../services";
import { Link } from 'react-router-dom';

function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    paymentMethod: 'creditCard',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const { clearCart, cart } = useContext(CartProvider);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createOrder = () => {
    const orderData = {
      buyer: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
      },
      products: cart.map((item) => ({
        name: item.title,
        id: item.id,
        price: item.price,
        quantity: item.quantity,
      })),
      total: calculateTotal(),
    };

    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');

    addDoc(ordersCollection, orderData)
      .then((docRef) => {
        console.log('orden creada con id: ', docRef.id);
        setOrderId(docRef.id);
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder();
  };

  useEffect(() => {
    return () => {
      if (orderId) {
        clearCart();
      }
    };
  }, [orderId]);


    return (
      <div>
      <h2>Finalizar compra</h2>
      {isFormSubmitted ? (
        <div>
          <p>¡Compra exitosa! Código de compra: {orderId}</p>
          <p>Detalle de tu compra: </p>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={`/img/${item.imageId}`} alt={item.title} />
                </div>
                <p >{item.title}</p>
                <p > - ${item.price} -</p>
                <p >Cantidad: {item.quantity}</p>
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotal()}</p>
          <Link to="/">
            <button>Volver</button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} >
          <p>Completa tus datos para finalizar tu compra!</p>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Telefono:</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Dirección de Envío:</label>
            <input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            ></input>
          </div>
          <div >
            <label htmlFor="paymentMethod">Método de Pago:</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
            >
              <option value="creditCard">Tarjeta de Crédito</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          <button type="submit" >
            Finalizar Compra
          </button>

          <Link to="/"><button> Volver </button></Link>
        </form>
      )}
    </div>
  );
}

export default Checkout;




