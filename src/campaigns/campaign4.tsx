import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "../pages/LandingPage";
import { campaigns } from "../config/campaigns";
import "../index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LandingPage config={campaigns.campaign4} />
  </React.StrictMode>
);

