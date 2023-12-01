import React from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Layout from "../layout/Layout";

const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const roles = role ? role.split() : []; // Add a check for null
  const location = useLocation();
  if (roles.find((role) => allowedRoles?.includes(role)) && token) {
    return <Layout />;
  } else if (!token && !role) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};
export default ProtectedRoute;
