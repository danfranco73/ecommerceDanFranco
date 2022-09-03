import "../App.css"
import CartImg from "./CartWidget/CartImg";

const NavBar = () => {
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            TP Mayorista
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Productos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Ofertas
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mas...
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Contacto
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      FAQ
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <CartImg />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
