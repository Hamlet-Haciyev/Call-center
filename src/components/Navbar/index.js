import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Icon } from "../../assets/icons";
const Navbar = () => {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#fff",
        boxShadow: " 0px 0px 16px 1px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box>
            <Typography
              variant="h4"
              component="h6"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "Proxima Nova",
                fontSize:"16px",
                fontWeight: 400,
                color: "#5F5F5F",
              }}
            >
              Istifadəçi adı və soyadı
            </Typography>
            <Typography
              component="p"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "Proxima Nova",
                fontSize:"14px",
                fontWeight: 400,
                color: "#75787B",
                textDecoration: "none",
              }}
            >
              Operator : 1327
            </Typography>
          </Box>
          <Box>
            <Icon name="hamburger" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
