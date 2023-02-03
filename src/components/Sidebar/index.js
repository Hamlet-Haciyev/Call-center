import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Icon } from "../../assets/icons";
const drawerWidth = "270px";
const Sidebar = () => {
  const navigate = useNavigate(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <>
      {isSidebarOpen ? (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              boxSixing: "border-box",
              width: drawerWidth,
              justifyContent: "space-between",
            },
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "28px 0 40px 0",
              }}
            >
              <Icon name="logo" />
            </Box>
            <List>
              {[
                {
                  text: "Müştəri məlumatları",
                  icon: "userinfo",
                  to: "/user",
                },
                {
                  text: "Sənədlər",
                  icon: "document",
                  to: "/document",
                },
                {
                  text: "Hesabatlıq",
                  icon: "accountability",
                  to: "/accountability",
                },
                {
                  text: "Tənzimləmələr",
                  icon: "setting",
                  to: "/setting",
                },
              ].map(({ text, icon, to }, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{
                    display: "block",
                    borderLeft:
                      selectedIndex === index ? "3px solid #ffa300" : "3px solid transparent",
                    mb: "7px",
                  }}
                  onClick={() => navigate(`${to}`)}
                >
                  <ListItemButton
                    selected={selectedIndex === index}
                    onClick={(event) => handleListItemClick(event, index)}
                    sx={{
                      minHeight: 48,
                      justifyContent: isSidebarOpen ? "initial" : "center",
                      color: selectedIndex === index ? "#FF8200" : "#5F5F5F",
                      background:
                        selectedIndex === index ? "#FFFBF3 !important" : "",
                      padding: "13px 29px",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: isSidebarOpen ? 2.5 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        name={icon}
                        color={selectedIndex === index ? "#ffa300" : "#5F5F5F"}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: isSidebarOpen ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Typography
              fontFamily={"Regular"}
              fontSize={"15px"}
              textAlign={"center"}
              color={"#75787B"}
              component={"p"}
              paddingBottom={"25px"}
            >
              Expresspay © 2013—2022
            </Typography>
          </Box>
        </Drawer>
      ) : null}
    </>
  );
};

export default Sidebar;
