import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import './Header.css';
import getAppName from '../AppName';

function Header({ categories, bookmarkItemsCount, cartItemsCount }) {
  const appName = getAppName();

  return (
    <div id="header">
      <>
        <Link to={`${appName}/`} className="logo-section">
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
          <NavLink className="dropdown-link" to={`${appName}/products`}>
            All
          </NavLink>
          {categories.map((category, i) => {
            return (
              <NavLink
                key={i}
                className="dropdown-link"
                to={`${appName}/products?category=${category}`}
              >
                {[category[0].toUpperCase(), ...category.slice(1)]}
              </NavLink>
            );
          })}
        </nav>
      </div>
      <div id="user-buttons">
        <Link to={`${appName}/bookmark`}>
          <button className="circle-btn black header-btn">
            <i className="fa-solid fa-bookmark"></i>
            <div className="header-btn-counter">
              <p>{bookmarkItemsCount < 100 ? bookmarkItemsCount : '99+'}</p>
            </div>
          </button>
        </Link>
        <Link to={`${appName}/cart`}>
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
