import React from "react";
import { Navigate } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div>
     
      <h1 className="text-5xl font-bold text-center text-slate-950 mt-52"> 404 page not found</h1>
      </div>
      <Navigate to={'/'}>Back home</Navigate>
    </div>
  );
};

export default ErrorPage;
