import {
  Box,
  createTheme,
  Tab,
  Tabs,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Credit = () => {
  const themeTabs = createTheme({
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            fontFamily: "Regular",
            textTransform: "capitalize",
            padding: "20px 10px",
            width: "150px",
            "&.Mui-selected": {
              color: "#FFA300",
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            "& .MuiTabs-indicator": {
              backgroundColor: "#FFA300",
              height: "3px",
            },
          },
        },
      },
    },
  });
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={themeTabs}>
      <div
        style={{ marginTop: "10px", background: "#fff", borderRadius: "12px" }}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            borderWidth: "solid #E1E1E1",
          }}
        >
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Kredit" {...a11yProps(0)} />
            <Tab label="Kart Krediti" {...a11yProps(1)} />
            <Tab label="Əmanət" {...a11yProps(2)} />
            <Tab label="Bank Kartı" {...a11yProps(3)} />
            <Tab label="Cari Hesab" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
      </div>
    </ThemeProvider>
  );
};

export default Credit;
