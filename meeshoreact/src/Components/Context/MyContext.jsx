import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";

const initialState = { currentuser: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        currentuser: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        currentuser: null,
      };
    default:
      return state;
  }
};

export const MeeshoContext = createContext();

const MyContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  const login = (userData, token) => {
    localStorage.setItem("meeshoToken", JSON.stringify(token));
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  };
  const logout = () => {
    localStorage.removeItem("meeshoToken");
    dispatch({
      type: "LOGOUT",
    });
  };

  useEffect(() => {
    async function getCurremtUser() {
      try {
        const token = JSON.parse(localStorage.getItem("meeshoToken"));
        const response = await axios.post("http://localhost:8000/currentuser", {
          token,
        });

        if (response.data.success) {
          dispatch({
            type: "LOGIN",
            payload: response.data.user,
          });
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
    }

    getCurremtUser();
  }, []);

  return (
    <>
      <MeeshoContext.Provider value={{ state, login, logout }}>
        {children}
      </MeeshoContext.Provider>
    </>
  );
};

export default MyContext;

// const login = (userData) => {
//   localStorage.setItem("currentmeeshouser", JSON.stringify(userData));
//   dispatch({
//     type: "LOGIN",
//     payload: userData,
//   });
// };
// const logout = () => {
//   localStorage.removeItem("currentmeeshouser");
//   dispatch({
//     type: "LOGOUT",
//   });
// };

// useEffect(() => {
//   const currentuser = JSON.parse(localStorage.getItem("currentmeeshouser"));

//   if (currentuser) {
//     dispatch({
//       type: "LOGIN",
//       payload: currentuser,
//     });
//   }
// }, []);
