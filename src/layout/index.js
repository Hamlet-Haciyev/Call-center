import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box >
        <Sidebar />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
