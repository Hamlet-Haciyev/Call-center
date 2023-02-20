import React from "react";
import {
  Box,
  createTheme,
  Grid,
  Tab,
  Tabs,
  ThemeProvider,
} from "@mui/material";
import TableCredit from "./table/credit";
import CardCredit from "./table/cardCredit";
import CurrentAccount from "./table/currentAccount";
import BankCard from "./table/bankCard";
import Deposit from "./table/deposit";
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
      {value === index && <Box maxWidth={"1170px"}>{children}</Box>}
    </div>
  );
};
const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Credit = () => {
  const themeTabs = createTheme({
    components: {
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
      MuiTab: {
        styleOverrides: {
          root: {
            fontFamily: "Regular",
            textTransform: "capitalize",
            padding: "20px 10px",
            width: "180px",
            "&.Mui-selected": {
              color: "#FFA300",
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            textAlign: "center",
            minWidth: "180px",
            borderRight: "1px solid #D0D0CE",
          },
        },
      },
      MuiTableContainer: {
        styleOverrides: {
          root: {
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#FBFBFB",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#D9D9D9",
              borderRadius: "10px",
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
      <Grid
        container
        marginTop="10px"
        backgroundColor="#fff"
        borderRadius="12px"
        maxWidth="1455px"
        overflow="hidden"
      >
        <Grid item xs={12} sm={12} lg={12}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "#E1E1E1",
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
            <TableCredit />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <CardCredit />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Deposit />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <BankCard />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <CurrentAccount />
          </TabPanel>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Credit;
