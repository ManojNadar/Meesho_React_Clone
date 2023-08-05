import React from "react";
import { NavLink } from "react-router-dom";
import meeshologo from "../Assets/Meesho.png";
import "../Styles/NavbarSignUp.css";

const NavbarSignUp = () => {
  return (
    <>
      <header>
        <div id="nav-container">
          <div id="left-nav">
            <div id="logo">
              <NavLink to="/">
                <img src={meeshologo} alt="" />
              </NavLink>
            </div>
            <div id="search">
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
              <input
                type="text"
                placeholder="Try Saree,Kurti or Search by product Code"
              />
            </div>
          </div>
          <div id="right-nav-Container">
            <div id="mobileNav">
              <i
                className="fa-solid fa-mobile-screen-button fa-lg"
                style={{ color: "#464646" }}
              ></i>
              <p>Download App</p>
            </div>
            <div id="supplierNav">
              <p>Become a Supplier</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarSignUp;
