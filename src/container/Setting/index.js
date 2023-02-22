import React from "react";
import {
  Box,
  createTheme,
  Grid,
  Tab,
  Tabs,
  ThemeProvider,
} from "@mui/material";
import ServiceField from "./component/ServiceField";
import ServiceType from "./component/ServiceType";
import DeleteFromAccount from "./component/DeleteFromAccount";
import Media from "./component/Media";
import User from "./component/User";
import Email from "./component/Email";
import ServiceCharacter from "./component/ServiceCharacter";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </Box>
  );
};
const Setting = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const SettingTheme = createTheme({
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            fontFamily: "Regular",
            color: "#5F5F5F",
            alignItems: "start",
            textTransform: "capitalize",
            fontSize: "15px",
            padding: "5px 35px",
            marginBottom: "4px",
            "&.Mui-selected": {
              color: "#FFA300",
              backgroundColor: "#FFFBF3",
              borderRadius: "8px",
            },
            "&.Mui-selected span": {
              border: "none",
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={SettingTheme}>
      <Box sx={{ backgroundColor: "#F5F5F5", minHeight: "calc(100vh - 60px)" }}>
        <Grid container padding={"34px 40px"} columnSpacing={4}>
          <Grid item lg={3} md={12}>
            <Box
              sx={{
                padding: "20px 18.5px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                marginBottom: "20px",
              }}
            >
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "transparent !important",
                  },
                }}
              >
                <Tab label="Xidmət sahəsi" />
                <Tab label="Xidmət növü" />
                <Tab label="Hesabdan sil" />
                <Tab label="Media" />
                <Tab label="User" />
                <Tab label="Email" />
                <Tab label="Xidmət xarakteri" />
              </Tabs>
            </Box>
          </Grid>
          <Grid item lg={9} md={12}>
            <TabPanel value={value} index={0}>
              <ServiceField />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ServiceType />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <DeleteFromAccount />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Media />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <User />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Email />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <ServiceCharacter />
            </TabPanel>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Setting;
