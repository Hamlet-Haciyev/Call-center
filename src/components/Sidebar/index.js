import React, { useState } from "react";
import { Drawer } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";
const drawerWidth = "250px";
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const theme = useTheme();
  return (
    <Box component={"nav"}>
      {isSidebarOpen ? (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          Sidebar
        </Drawer>
      ) : null}
    </Box>
  );
};

export default Sidebar;
