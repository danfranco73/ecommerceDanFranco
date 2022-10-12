import "./NavBar.css";
import CartImg from "../CartWidget/CartImg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid bg-info">
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
            <ul className="navbar-nav display">
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
                <Link className="nav-link" to="/category/Harinas">
                  Harinas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="login">
                  Login
                </Link>
              </li>
              <li className="nav-item dropdown bg-info">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Más...
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <div
                      className="dropdown-item"
                      href="https://www.facebook.com/todopymesmayorista/"
                    >
                      <a
                        href="https://www.facebook.com/todopymesmayorista/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Facebook
                      </a>
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      href="https://www.instagram.com/todopymes/"
                    >
                      <a
                        href="https://www.instagram.com/todopymes/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Instagram
                      </a>
                    </div>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="FAQ">
                      Preguntas Frecuentes
                    </Link>
                  </li>
                  <li>
                  <div
                      className="dropdown-item"
                      href="https://web.whatsapp.com/"
                    >
                      <a
                        href="https://web.whatsapp.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Contacto
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            <Link to="/Cart">
              <CartImg />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
