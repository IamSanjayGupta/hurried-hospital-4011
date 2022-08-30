import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import LoginForm from "./account/LoginForm";
import PasswordForm from "./account/PasswordForm";
import SetPasswordForm from "./account/SetPasswordForm";
import SignupForm from "./account/SignupForm";
import Home from "./Home";
import JobDetails from "./JobDetails";
import Jobs from "./Jobs";
import Settings from "./Settings";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/login"} element={<LoginForm />} />
      <Route path={"/signup"} element={<SignupForm />} />
      <Route path={"/password"} element={<PasswordForm />} />
      <Route path={"/setPassword/:token"} element={<SetPasswordForm />} />
      <Route path={"/jobs"} element={<Jobs />} />
      <Route path={"/jobdetails"} element={<JobDetails />} />
      <Route
        path={"/settings"}
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
