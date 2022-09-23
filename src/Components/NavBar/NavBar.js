import "./NavBar.css";
import CartImg from "../../Pages/CartWidget/CartImg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid bg-warning">
          <Link className="navbar-brand" to="/">
            TP Mayorista
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav displa">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Catálogo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category/Aceites">
                  Aceites
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category/Yerbas">
                  Yerbas
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="login">
                  Login
                </Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Más...
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="FB"
                      href="https://www.facebook.com/todopymesmayorista/"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/item/:itemId"
                      href="https://www.instagram.com/tpmayorista/"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="FAQ">
                      Preguntas Frecuentes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="contact">
                      Contacto
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <Link to="/Carrito">
            <CartImg />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
