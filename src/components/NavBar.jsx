import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useState } from "react";
import { getProducts } from "../services";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/img/logo.png";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchQuery) {
      const results = await getProducts(null, searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="p-3 bg-dark text-white">
      <div className="container">
        <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img
              className="bi me-2"
              width="90"
              height="60"
              role="img"
              aria-label="Bootstrap"
              src={logo}
            />
          </div>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link px-2 text-secondary">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/category/taza"
                className="nav-link px-2 text-white"
              >
                Tazas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/category/remera"
                className="nav-link px-2 text-white"
              >
                Remeras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/category/gorra"
                className="nav-link px-2 text-white"
              >
                Gorras
              </NavLink>
            </li>
          </ul>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Buscar..."
              aria-label="Buscar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <div className="text-end">
            <NavLink to="/cart">
            <CartWidget className="btn btn-primary position-relative" />
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;



