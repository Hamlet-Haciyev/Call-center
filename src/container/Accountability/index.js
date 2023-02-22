import React from "react";
import {
  Grid,
  Box,
  Tabs,
  Tab,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Operation from "./component/Operation";
import Credit from "./component/Credit";
import SearchNumber from "./component/SearchNumber";
import SearchSMSNumber from "./component/SearchSMSNumber";
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

const Accountability = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const AccountabilityTheme = createTheme({
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            fontFamily: "Regular",
            color: "#5F5F5F",
            alignItems: "start",
            textTransform: "capitalize",
            fontSize: "15px",
            padding:"5px 35px",
            marginBottom:"4px",
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
    <ThemeProvider theme={AccountabilityTheme}>
      <Box sx={{ backgroundColor: "#F5F5F5", minHeight: "calc(100vh - 60px)" }}>
        <Grid container padding={"34px 41px"} columnSpacing={4}>
          <Grid item lg={3} md={12}>
            <Box
              sx={{
                padding: "20px 18.5px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                marginBottom:"20px"
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
                <Tab label="Operations" />
                <Tab label="Kredit" />
                <Tab label="Zənglər" />
                <Tab label="Superviser" />
                <Tab label="Sms nömrə axtarış" />
                <Tab label="Nömrə axtarış" />
                <Tab label="Plastik kart" />
                <Tab label="Pul" />
                <Tab label="Sms Banking" />
                <Tab label="3D Secure" />
                <Tab label="PayBack" />
              </Tabs>
            </Box>
          </Grid>
          <Grid item lg={9} md={12}>
            <TabPanel value={value} index={0}>
              <Operation />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Credit />
            </TabPanel>
            <TabPanel value={value} index={2}>
              Zənglər
            </TabPanel>
            <TabPanel value={value} index={3}>
              Superviser
            </TabPanel>
            <TabPanel value={value} index={4}>
              <SearchSMSNumber />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <SearchNumber />
            </TabPanel>
            <TabPanel value={value} index={6}>
              Plastik kart
            </TabPanel>
            <TabPanel value={value} index={7}>
              Pul
            </TabPanel>
            <TabPanel value={value} index={8}>
              Sms Banking
            </TabPanel>
            <TabPanel value={value} index={9}>
              3D Secure
            </TabPanel>
            <TabPanel value={value} index={10}>
              PayBack
            </TabPanel>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Accountability;
