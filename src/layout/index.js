import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box borderRight="1px solid rgba(0, 0, 0, 0.12)">
        <Sidebar />
      </Box>
      <Box width={"100%"}>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
