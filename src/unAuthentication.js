import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./container/404NotFound";
import Login from "./container/Login";

const UnAuthentication = ({ setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default UnAuthentication;
