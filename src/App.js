import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "./theme";
import Authentication from "./authentication";
import UnAuthentication from "./unAuthentication";
import { useState } from "react";
const App = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        {isAuthenticated || user ? (
          <Authentication />
        ) : (
          <UnAuthentication setUser={setUser} />
        )}
      </ThemeProvider>
    </Router>
  );
};

export default App;
