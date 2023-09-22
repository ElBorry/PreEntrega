import './App.css'
import { Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/NavBar";
import Checkout from "./components/Checkout";
import ControlledCarousel from "./components/ControlledCarousel";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Cart from "./components/Cart";


function App() {

  return (
    
    <CartProvider>
      <Navbar />
      <ControlledCarousel/>
      
      <Routes>
        {/* muestra todos los productos */}
        <Route path="/" element={<ItemListContainer />} />
        {/* muestra los productos de una categoría */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        
      </Routes>
      <Footer />
    </CartProvider>
  )
}


export default App;




