import React from "react";
import Navbar from "./Navbar";
import "../Styles/Login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />
      <main id="#mainLoginBody">
        <div id="mainLoginContainer">
          <div id="login-body">
            <div id="login-img">
              <img
                src="https://images.meesho.com/images/marketing/1661417516766.webp"
                alt=""
              />
            </div>

            <div id="login-details">
              <h2>Sign Up to view your profile</h2>
              <form onsubmit="loginForm(event)">
                <div id="login-input-container">
                  <label> Email </label> <br />
                  <input
                    id="login_email"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <br />
                  <label>Password</label> <br />
                  <input
                    id="login_password"
                    type="password"
                    placeholder="***********"
                  />
                  <br />
                </div>
                <div id="login-btn">
                  <button>Login</button>
                </div>
              </form>
              <div id="new-account">
                <p>
                  New to Meesho ? &nbsp;
                  <NavLink to="/register">Register Here</NavLink>
                </p>
              </div>

              <div id="terms">
                <p>By continuing, you agree to Meesho’s</p>
                <p>
                  <NavLink>Terms & Conditions and Privacy Policy</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
