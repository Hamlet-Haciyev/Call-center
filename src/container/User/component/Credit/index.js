import { Box, createTheme, Tab, Tabs, ThemeProvider } from "@mui/material";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
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
  const data = [{ name: 1243412, age: 12345, city: 123 }];
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
      MuiTableCell: {
        styleOverrides: {
          root: {},
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {},
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
        style={{
          marginTop: "10px",
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "#E1E1E1",
            maxHeight: "100%",
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
          <TableContainer>
            <Table aria-label="scrollable table">
              <TableHead>
                <TableRow>
                  <TableCell>Müqavilə nömrəsi</TableCell>
                  <TableCell>Müqavilə nömrəsi</TableCell>
                  <TableCell>Müqavilə məbləği</TableCell>
                  <TableCell>Əsas borc qalığı</TableCell>
                  <TableCell>Hesab qalığı</TableCell>
                  <TableCell>Növbəti ödəniş tarixi</TableCell>
                  <TableCell>Müqavilə nömrəsi</TableCell>
                  <TableCell>Müqavilə nömrəsi</TableCell>
                  <TableCell>Müqavilə nömrəsi</TableCell>
                  <TableCell>Müqavilə nömrəsi</TableCell>
                  <TableCell>Müqavilə nömrəsi</TableCell>
                  <TableCell>Müqavilə nömrəsi</TableCell>
                  <TableCell>Müqavilə nömrəsi</TableCell>
                  <TableCell>Müqavilə nömrəsi</TableCell>
                  <TableCell>Müqavilə nömrəsi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.age}</TableCell>
                    <TableCell>{row.city}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
