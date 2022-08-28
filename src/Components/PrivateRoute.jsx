import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const PrivateRoute = ({ children }) => {
  const { state, dispatch } = useContext(AppContext);
  if (!state.inAuth) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
