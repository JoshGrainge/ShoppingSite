import logo from '../logo.svg';
import './Header.css';

function Header() {
  return (
    <div id="header">
      <div className="logo-section">
        <img src={logo} alt="logo" id="logo" />
        <h1 class="logo-text">
          Kitty
          <br />
          City
        </h1>
      </div>
      <nav id="products">Products</nav>
      <div id="user-buttons">
        <a href="/Bookmark">
          <i>Bookmark</i>
        </a>
        <a href="/Cart">
          <i>Cart</i>
        </a>
      </div>
    </div>
  );
}

export default Header;
