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
    >
      <Container maxWidth="1200px">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box>
            <Typography
              variant="h4"
              component="h6"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "Regular",
                fontSize:"17px",
                fontWeight: 500,
                color: "#5F5F5F",
                mb:"1px"
              }}
            >
              Istifadəçi adı və soyadı
            </Typography>
            <Typography
              component="p"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "Regular",
                fontSize:"15px",
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
