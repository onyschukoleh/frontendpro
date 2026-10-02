import { StrictMode } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary.jsx";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { ThemeProvider } from "./components/ThemeContext.jsx";
import "./styles/global.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>,
);
