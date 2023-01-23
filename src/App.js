import { ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { themeSetting } from "./theme";
import Layout from "./layout";
import Document from "./container/Document";
import Setting from "./container/Setting";
import User from "./container/User";
import Login from "./container/Login";
import Accountability from "./container/Accountability";
import NotFound from "./container/404NotFound";
function App() {
  return (
    <Router>
      <ThemeProvider theme={themeSetting}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to={"/user"} />} />
            <Route path="/document" element={<Document />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/user" element={<User />} />
            <Route path="/accountability" element={<Accountability />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
