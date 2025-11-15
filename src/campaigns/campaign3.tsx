import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import LandingPage from "../pages/LandingPage";
import { campaigns } from "../config/campaigns";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingPage config={campaigns.campaign3} />
  </StrictMode>
);
