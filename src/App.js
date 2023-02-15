import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "./theme";
import Authentication from "./authentication";
import UnAuthentication from "./unAuthentication";
const App = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem("user"));
  return (
    <Router>
      <ThemeProvider theme={theme}>
        {isAuthenticated ? <Authentication /> : <UnAuthentication />}
      </ThemeProvider>
    </Router>
  );
};

export default App;
