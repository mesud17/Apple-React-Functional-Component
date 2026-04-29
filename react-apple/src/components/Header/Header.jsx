import logo from "../../assets/images/icons/logo-sm.png";
import search_icon from "../../assets/images/icons/search-icon-sm.png";
import cart_icon from "../../assets/images/icons/cart-sm.png";

function Header() {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark ">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            ☰
          </button>

          <a className="navbar-brand mx-auto" href="#">
            <img src={logo} alt="Apple Logo" />
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav nav-justified w-100 nav-fill">

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Mac
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  iphone
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  ipad
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  watch
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  tv
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Music
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={search_icon} alt="Search" />
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={cart_icon} alt="Cart" />
                </a>
              </li>

            </ul>

          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;