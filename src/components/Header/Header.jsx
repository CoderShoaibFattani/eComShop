import React, { useState } from "react";
import logo from "../../assets/Ow Logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container1">
      <div className="logo">
        <img src={logo} height={40} alt="" />
      </div>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <ul className="ulbox">
          <li>
            <NavLink to="/" className="link">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="link">
              ALL PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="link">
              ABOUT US
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="icons">
        <CiShoppingCart className="cartIcon" />
        <GiHamburgerMenu className="hamburger" onClick={toggleMenu} />
      </div>
    </div>
  );
};

export default Header;
