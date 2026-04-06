import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AuthContextProvider from "./contexts/auth/AuthContextProvider.jsx";
import "./styles/index.css";
import DevelopersContextProvider from "./contexts/developers/DevelopersContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <DevelopersContextProvider>
          <App />
        </DevelopersContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
