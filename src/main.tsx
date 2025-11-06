import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./components/error/ErrorBoundary";
import { setupConsoleFiltering } from "./lib/console";
import { setupDevTools, setupErrorHandling } from "./lib/devtools";
import "./index.css";

setupConsoleFiltering();
setupErrorHandling();
setupDevTools();

// Disable automatic scroll restoration to prevent conflicts with our ScrollToTop component
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
