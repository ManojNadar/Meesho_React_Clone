import React, { createContext, useEffect, useReducer } from "react";

const initialState = { currentuser: null };
export const MeeshoContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        currentuser: action.payload,
      };
    case "LOGOUT":
      return {
        currentuser: null,
      };
    default:
      return state;
  }
};

const MyContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  const login = (userData) => {
    localStorage.setItem("currentmeeshouser", JSON.stringify(userData));
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  };
  const logout = () => {
    localStorage.removeItem("currentmeeshouser");
    dispatch({
      type: "LOGOUT",
    });
  };

  useEffect(() => {
    const currentuser = JSON.parse(localStorage.getItem("currentmeeshouser"));

    if (currentuser) {
      dispatch({
        type: "LOGIN",
        payload: currentuser,
      });
    }
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
