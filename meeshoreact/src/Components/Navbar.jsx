import React from "react";
import "../Styles/Navbar.css";
import meeshologo from "../Assets/Meesho.png";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const route = useNavigate();
  return (
    <>
      {/* <!-- profile dropDown --> */}

      <div id="profile-dropDown">
        <div id="user">
          <div id="user-details">
            <h5 id="current_user">Hello User</h5>
            <p>To access Your Meesho Account </p>

            <button onClick={() => route("/login")}>Login/SignUp</button>
            {/* <!-- <p>659874212</p> --> */}
          </div>
        </div>
        <div id="orders">
          <i className="fa-solid fa-bag-shopping fa-xl"></i>
          <h4>My Orders</h4>
        </div>
      </div>

      {/* header Navbar */}

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
          <div id="right-nav">
            <div id="mobile">
              <i
                className="fa-solid fa-mobile-screen-button fa-lg"
                style={{ color: "#464646" }}
              ></i>
              <p>Download App</p>
            </div>
            <div id="supplier">
              <p>Become a Supplier</p>
            </div>
            <div id="profile-container">
              <div id="profile">
                <NavLink>
                  <i
                    className="fa-solid fa-user fa-sm"
                    style={{ color: "#828283" }}
                  ></i>
                  <p>Profile</p>
                </NavLink>
              </div>

              <div id="cart">
                <NavLink to="/cart">
                  <i
                    className="fa-solid fa-cart-shopping fa-sm"
                    style={{ color: "#828283" }}
                  ></i>
                  <p>Cart</p>
                </NavLink>
              </div>
              <div id="wishList">
                <NavLink to="/wishList">
                  <i
                    className="fa-solid fa-heart fa-sm"
                    style={{ color: "#828283" }}
                  ></i>
                  <p>Wishlist</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav>
        <div id="sec-nav-container">
          <p>
            <NavLink to="/womenEthnic">Women Ethnic</NavLink>
          </p>

          <p>
            <NavLink to="/womenWestern">Women Western</NavLink>
          </p>

          <p>
            <NavLink to="/men">Men</NavLink>
          </p>

          <p>
            <NavLink to="/kids">Kids</NavLink>
          </p>

          <p>
            <NavLink to="/homeKitchen">Home & Kitchen</NavLink>
          </p>
          <p>
            <NavLink to="/beauty">Beauty & Health</NavLink>
          </p>

          <p>
            <NavLink to="/jwellery">Jwellery & Accessories</NavLink>
          </p>

          <p>
            <NavLink to="/bags">Bags & Footwear</NavLink>
          </p>

          <p>
            <NavLink to="/electronics">Electronics</NavLink>
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
