import React, { useEffect, useState } from "react";
import "../Styles/Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarSignUp from "./NavbarSignUp";

const Register = () => {
  const [regMeeshoUser, setRegMeeshoUser] = useState({
    meeshoUser: "",
    meeshoEmail: "",
    meeshoPassword: "",
    meeshoCpassword: "",
    meeshoRole: "",
    cart: [],
  });

  const route = useNavigate();

  useEffect(() => {
    const getcurrUser = JSON.parse(localStorage.getItem("currentmeeshouser"));
    if (getcurrUser) {
      route("/");
    }
  }, []);

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setRegMeeshoUser({ ...regMeeshoUser, [name]: value });
  };

  const handleRegFormSubmit = (e) => {
    e.preventDefault();

    const {
      meeshoUser,
      meeshoEmail,
      meeshoPassword,
      meeshoCpassword,
      meeshoRole,
    } = regMeeshoUser;

    if (
      meeshoUser &&
      meeshoEmail &&
      meeshoPassword &&
      meeshoCpassword &&
      meeshoRole
    ) {
      if (meeshoPassword.length > 2) {
        if (meeshoPassword === meeshoCpassword) {
          const getMeeshoUser =
            JSON.parse(localStorage.getItem("meeshoreguser")) || [];
          let flag = false;
          for (let i = 0; i < getMeeshoUser.length; i++) {
            if (getMeeshoUser[i].meeshoEmail === meeshoEmail) {
              flag = true;
            }
          }

          if (!flag) {
            const meeshoObj = {
              ...regMeeshoUser,
            };
            getMeeshoUser.push(meeshoObj);
            localStorage.setItem(
              "meeshoreguser",
              JSON.stringify(getMeeshoUser)
            );
            toast.success("Registered Successfully");

            setTimeout(() => {
              route("/login");
            }, 700);
            setRegMeeshoUser({
              meeshoUser: "",
              meeshoEmail: "",
              meeshoPassword: "",
              meeshoCpassword: "",
              meeshoRole: "",
            });
          }
        } else {
          toast.error("password doesnot match");
          setRegMeeshoUser({
            meeshoUser: "",
            meeshoEmail: "",
            meeshoPassword: "",
            meeshoCpassword: "",
            meeshoRole: "",
          });
        }
      } else {
        toast.warn("Password must contain atleast 3 characters");
        setRegMeeshoUser({
          meeshoUser: "",
          meeshoEmail: "",
          meeshoPassword: "",
          meeshoCpassword: "",
          meeshoRole: "",
        });
      }
    } else {
      toast.error("Please fill all the Fields");
    }
  };
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
                    name="meeshoUser"
                    value={regMeeshoUser.meeshoUser}
                  />
                  <br />
                  <input
                    onChange={handleChangeInput}
                    id="userEmail"
                    type="email"
                    placeholder="Enter your email"
                    name="meeshoEmail"
                    value={regMeeshoUser.meeshoEmail}
                  />
                  <br />
                  <input
                    onChange={handleChangeInput}
                    id="userPassword"
                    type="password"
                    placeholder="**********"
                    name="meeshoPassword"
                    value={regMeeshoUser.meeshoPassword}
                  />
                  <br />
                  <input
                    onChange={handleChangeInput}
                    id="userConfirmPassword"
                    type="password"
                    placeholder="**********"
                    name="meeshoCpassword"
                    value={regMeeshoUser.meeshoCpassword}
                  />
                  <br />
                  <select
                    onChange={handleChangeInput}
                    id="userRole"
                    name="meeshoRole"
                    value={regMeeshoUser.meeshoRole}
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
