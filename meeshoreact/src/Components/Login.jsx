import React, { useContext, useEffect, useState } from "react";
import "../Styles/Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import NavbarSignUp from "./NavbarSignUp";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { MeeshoContext } from "./Context/MyContext";
import axios from "axios";

const Login = () => {
  const [loginMeesho, setloginMeesho] = useState({
    meeshoEmail: "",
    meeshoPassword: "",
  });

  const { state, login } = useContext(MeeshoContext);

  const route = useNavigate();

  const handleLoginChange = (e) => {
    const { value, name } = e.target;
    setloginMeesho({ ...loginMeesho, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const { meeshoEmail, meeshoPassword } = loginMeesho;

    if (meeshoEmail && meeshoPassword) {
      try {
        const response = await axios.post("http://localhost:8000/login", {
          loginMeesho,
        });

        if (response.data.success) {
          const user = response.data.user;
          const token = response.data.token;

          await login(user, token);

          toast.success(response.data.message);
          setloginMeesho({
            meeshoEmail: "",
            meeshoPassword: "",
          });

          setTimeout(() => {
            route("/");
          }, 1000);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("all fields are mandatory");
    }
  };

  useEffect(() => {
    if (state?.currentuser?.meeshoUser) {
      route("/");
    }
  }, [state, route]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={800}
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
      <main id="#mainLoginBody">
        <div id="mainLoginContainer">
          <div id="login-body-container">
            <div id="login-img">
              <img
                src="https://images.meesho.com/images/marketing/1661417516766.webp"
                alt=""
              />
            </div>

            <div id="login-details">
              <h2>Sign Up to view your profile</h2>
              <form onSubmit={handleLoginSubmit}>
                <div id="login-input-container">
                  <input
                    value={loginMeesho.meeshoEmail}
                    name="meeshoEmail"
                    id="login_email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={handleLoginChange}
                  />
                  <br />
                  <input
                    value={loginMeesho.meeshoPassword}
                    name="meeshoPassword"
                    id="login_password"
                    type="password"
                    placeholder="***********"
                    onChange={handleLoginChange}
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;

// const [loginMeesho, setLoginMeesho] = useState({
//   loginEmail: "",
//   loginPassword: "",
// });

// const { login } = useContext(MeeshoContext);

// useEffect(() => {
//   const getcurrUser = JSON.parse(localStorage.getItem("currentmeeshouser"));
//   if (getcurrUser) {
//     route("/");
//   }
// }, []);

// const route = useNavigate();

// const handleLoginChange = (e) => {
//   const { name, value } = e.target;
//   setLoginMeesho({ ...loginMeesho, [name]: value });
// };

// const handleLoginSubmit = (e) => {
//   e.preventDefault();
//   const { loginEmail, loginPassword } = loginMeesho;

//   if (loginEmail && loginPassword) {
//     if (loginPassword.length > 2) {
//       const regUser = JSON.parse(localStorage.getItem("meeshoreguser"));
//       let flag = false;
//       let currentuser;
//       for (let i = 0; i < regUser.length; i++) {
//         if (regUser[i].meeshoEmail === loginEmail) {
//           flag = true;
//           currentuser = regUser[i];
//         }
//       }

//       if (flag) {
//         login(currentuser);
//         toast.success("logged in success");
//         setTimeout(() => {
//           route("/");
//         }, 800);
//       } else {
//         toast.error("invalid Credentials");
//       }
//     } else {
//       toast.warn("password must contain atleast 2 or more characters");
//     }
//   } else {
//     toast.error("please fill all the details");
//   }
//   // alert("alert");
// };
