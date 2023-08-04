import React from "react";
import Navbar from "./Navbar";
import "../Styles/Register.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Navbar />
      <main id="mainRegister">
        <div id="main-Registerbody">
          <div id="login-body">
            <div id="login-img">
              <img
                src="https://images.meesho.com/images/marketing/1661417516766.webp"
                alt=""
              />
            </div>

            <div id="login-details">
              <h2>Sign Up to view your profile</h2>

              <form onsubmit="registerForm(event)">
                <div id="login-input-container">
                  <label> Name </label> <br />
                  <input
                    id="userName"
                    type="text"
                    placeholder="Enter your name"
                  />
                  <br />
                  <label> Email </label> <br />
                  <input
                    id="userEmail"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <br />
                  <label> Password </label> <br />
                  <input
                    id="userPassword"
                    type="password"
                    placeholder="**********"
                  />
                  <br />
                  <label>Confirm password</label> <br />
                  <input
                    id="userConfirmPassword"
                    type="password"
                    placeholder="**********"
                  />
                  <br />
                </div>

                <div id="login-btn">
                  <button>Register</button>
                </div>
              </form>

              <div id="new-account">
                <p>
                  New to Meesho ? <NavLink to="/login">Login Here</NavLink>
                </p>
              </div>

              <div id="terms">
                <p>By continuing, you agree to Meesho’s</p>
                <p>
                  <NavLink to="">Terms & Conditions and Privacy Policy</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
