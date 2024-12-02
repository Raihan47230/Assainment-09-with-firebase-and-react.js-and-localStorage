import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthProvid } from "./AuthProviders/AuthProviders";

const PrivateRoute = ({ children }) => {
  const { users, loading } = useContext(AuthProvid);
  if (loading) {
    return (
      <div className="w-40 mx-auto">
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (users) {
    return children;
  }
  return (
    <div>
      <Navigate to={"/login"}></Navigate>
    </div>
  );
};

export default PrivateRoute;
