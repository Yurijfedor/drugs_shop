import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img
            src="/assets/logo.png"
            alt="DR.ugs Delivery"
            className="logo-img"
          />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shopping-cart" className="nav-link">
              Shopping Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/history" className="nav-link">
              History
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
