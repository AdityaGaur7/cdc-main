import React from "react";
import { Navigate } from "react-router-dom";
import decodeTokenAndGetRole from "./config/decodeToken";

const RoleProtectedRoute = ({ requiredRole, children }) => {
  const decoded = decodeTokenAndGetRole();

  if (!decoded) {
    // No valid token found, redirect to login
    return <Navigate to="/login" />;
  }

  const { role } = decoded; // Assuming the token contains a 'role' field

  if (requiredRole.includes(role)) {
    // If the user's role matches one of the required roles, render the children
    return children;
  }

  // If the user's role does not match, redirect to an unauthorized page or default route
  return <Navigate to="/" />;
};

export default RoleProtectedRoute;
