import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/Routes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
        <AppRoutes />
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
