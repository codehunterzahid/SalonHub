import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/Routes";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
