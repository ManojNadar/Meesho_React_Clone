import React from "react";
import "../Styles/CartNav.css";
import meeshoLogo from "../Assets/Meesho.png";
import { NavLink } from "react-router-dom";

const CartNav = () => {
  return (
    <>
      <div id="nav">
        <div id="inner-navbar">
          <div id="logo">
            <NavLink to="/">
              <img src={meeshoLogo} alt="" />
            </NavLink>
          </div>
          <div id="right-navbar">
            <div id="inner-right-nav">
              <div id="one" className="circle">
                <p>1</p>
                <p>cart</p>
              </div>
              <div id="line1"></div>
              <div id="two" className="circle">
                <p>2</p>
                <p>Address</p>
              </div>
              <div id="line2"></div>
              <div id="three" className="circle">
                <p>3</p>
                <p>Payment</p>
              </div>
              <div id="line3"></div>
              <div id="four" className="circle">
                <p>4</p>
                <p>Summary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartNav;
