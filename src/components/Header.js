import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import './Header.css';

function Header({ categories, bookmarkItemsCount, cartItemsCount }) {
  return (
    <div id="header">
      <>
        <Link to="/" className="logo-section">
          <img src={logo} alt="logo" id="logo" />
          <h1 className="logo-text">
            Kitty
            <br />
            City
          </h1>
        </Link>
      </>
      <div id="products">
        <p>
          Products <i className="fa-sharp fa-solid fa-caret-down"></i>
        </p>
        <nav className="product-links">
          <NavLink className="dropdown-link" to="/products">
            All
          </NavLink>
          {categories.map((category, i) => {
            return (
              <NavLink
                key={i}
                className="dropdown-link"
                to={`/products?category=${category}`}
              >
                {[category[0].toUpperCase(), ...category.slice(1)]}
              </NavLink>
            );
          })}
        </nav>
      </div>
      <div id="user-buttons">
        <Link to="bookmark">
          <button className="circle-btn black header-btn">
            <i className="fa-solid fa-bookmark"></i>
            <div className="header-btn-counter">
              <p>{bookmarkItemsCount < 100 ? bookmarkItemsCount : '99+'}</p>
            </div>
          </button>
        </Link>
        <Link to="cart">
          <button className="circle-btn black header-btn">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="header-btn-counter">
              <p>{cartItemsCount < 100 ? cartItemsCount : '99+'}</p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
