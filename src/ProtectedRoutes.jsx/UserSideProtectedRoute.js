import React from 'react'
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const UserSideProtectedRoute = ({ children, ...rest }) => {
  const token = localStorage.getItem("access_token");

  console.log("token in protected", token);

  if (token) {
    const usertoken = jwt_decode(token);
    console.log("user token", usertoken);
    const is_admin = usertoken?.is_admin;
    if (!is_admin) {

      return <Navigate to="/userhome" />;
    } else {

      return <>{children}</>;
    }
  } else {
    return <Navigate to="/login" />;
  }
};


export default UserSideProtectedRoute