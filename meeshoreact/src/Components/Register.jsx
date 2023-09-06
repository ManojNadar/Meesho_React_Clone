import React, { useContext, useEffect, useState } from "react";
import "../Styles/Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarSignUp from "./NavbarSignUp";
import axios from "axios";
import { MeeshoContext } from "./Context/MyContext";

const Register = () => {
  const [meeshoReg, setMeeshoReg] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    role: "Buyer",
    cart: [],
  });

  console.log(meeshoReg);

  const { state } = useContext(MeeshoContext);

  const route = useNavigate();

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setMeeshoReg({ ...meeshoReg, [name]: value });
  };

  const handleRegFormSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword, number, role } = meeshoReg;

    if (name && email && password && confirmPassword && number && role) {
      if (password === confirmPassword) {
        try {
          const response = await axios.post("http://localhost:8000/register", {
            meeshoReg,
          });

          if (response.data.success) {
            toast.success(response.data.message);
            setMeeshoReg({
              name: "",
              email: "",
              number: "",
              password: "",
              confirmPassword: "",
              role: "Buyer",
            });

            setTimeout(() => {
              route("/login");
            }, 800);
          } else {
            toast.error(response.data.message);
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
      } else {
        toast.error("pasword doesnot match");
      }
    } else {
      toast.error("all fields are mandatory");
    }
  };

  useEffect(() => {
    if (state?.currentuser) {
      route("/");
    }
  }, [state, route]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <NavbarSignUp />
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

              <form onSubmit={handleRegFormSubmit}>
                <div id="login-input-container">
                  <input
                    onChange={handleChangeInput}
                    id="userName"
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={meeshoReg.name}
                  />
                  <br />
                  <input
                    onChange={handleChangeInput}
                    id="userEmail"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={meeshoReg.email}
                  />
                  <br />
                  <input
                    onChange={handleChangeInput}
                    id="number"
                    type="number"
                    placeholder="Enter your Phone"
                    name="number"
                    value={meeshoReg.number}
                  />
                  <br />

                  <input
                    onChange={handleChangeInput}
                    id="userPassword"
                    type="password"
                    placeholder="**********"
                    name="password"
                    value={meeshoReg.password}
                  />
                  <br />
                  <input
                    onChange={handleChangeInput}
                    id="userConfirmPassword"
                    type="password"
                    placeholder="**********"
                    name="confirmPassword"
                    value={meeshoReg.confirmPassword}
                  />
                  <br />
                  <select
                    onChange={handleChangeInput}
                    id="userRole"
                    name="role"
                    value={meeshoReg.role}
                  >
                    <option value="">Select your Role</option>
                    <option value="Buyer">BUYER</option>
                    <option value="Seller">SELLER</option>
                  </select>
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
