import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { App } from "@/App";
import { SideNavbar } from "./components/SideNavbar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="lg:items-start lg:flex lg:justify-center lg:gap-10">
      <SideNavbar />
      <App />
    </div>
  </StrictMode>
);
