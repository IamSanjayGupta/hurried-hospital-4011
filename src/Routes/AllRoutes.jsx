import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./account/LoginForm";
import PasswordForm from "./account/PasswordForm";
import SetPasswordForm from "./account/SetPasswordForm";
import SignupForm from "./account/SignupForm";
import Home from "./Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/login"} element={<LoginForm />} />
      <Route path={"/signup"} element={<SignupForm />} />
      <Route path={"/password"} element={<PasswordForm />} />
      <Route path={"/setPassword/:token"} element={<SetPasswordForm />} />
    </Routes>
  );
};

export default AllRoutes;
