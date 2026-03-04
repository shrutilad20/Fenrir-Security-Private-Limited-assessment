// ─── App.jsx ──────────────────────────────────────────────────────────────────
// Root component — manages global state (theme + current screen)
// and renders the correct page.
//
// Screens:
//   "login"       → LoginPage
//   "dashboard"   → DashboardPage
//   "scan-detail" → ScanDetailPage
//
// Usage (Vite + React):
//   1. Place all .jsx files in src/
//   2. In main.jsx: import App from './App.jsx'; render <App />
//   3. npm run dev
import { useState } from "react";

import LoginPage from "./pages/LoginPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ScanDetailPage from "./pages/ScanDetailPage.jsx";

export default function App() {
  const [isDark,  setIsDark]  = useState(true);
  const [screen,  setScreen]  = useState("login"); // "login" | "dashboard" | "scan-detail"

  const props = { isDark, setIsDark, setScreen };

  return (
    <>
      {screen === "login"       && <LoginPage      {...props} />}
      {screen === "dashboard"   && <DashboardPage  {...props} />}
      {screen === "scan-detail" && <ScanDetailPage {...props} />}
    </>
  );
}
