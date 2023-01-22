import { ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { themeSetting } from "./theme";
import Layout from "./layout";
import Terminal from "./container/Terminal";
import Service from "./container/Service";
import Customer from "./container/Customer";
import Login from "./container/Login";
import NotFound from "./container/404NotFound";
function App() {
  return (
    <Router>
      <ThemeProvider theme={themeSetting}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to={"/terminal"} />}></Route>
            <Route path="/terminal" element={<Terminal />}></Route>
            <Route path="/service" element={<Service />}></Route>
            <Route path="/customer" element={<Customer />}></Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
