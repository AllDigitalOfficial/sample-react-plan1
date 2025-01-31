import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ContractData,
  HeroSection,
  Footer,
  Deposit,
  Levels,
  Navbars,
  Referral,
  ReferralLinkData,
  ScrollToTopButton,
} from "./components";

const App: React.FC = () => {
  // Change background color, font, and other settings when the component mounts
  useEffect(() => {
    // Set document title
    document.title = import.meta.env.VITE_APP_TITLE || "BnbBond";

    // Set favicon
    const favicon = document.querySelector(
      "link[rel*='icon']"
    ) as HTMLLinkElement;
    if (favicon) {
      favicon.href = import.meta.env.VITE_APP_FAVICON_ICON || "";
    }

    // Set the global background color for the entire app
    const globalBgColor = import.meta.env.VITE_GLOBAL_BG_COLOR || "#121212"; // Default to dark color
    document.body.style.backgroundColor = globalBgColor; // Apply the background color globally

    // Set the global font family
    const fontFamily = import.meta.env.VITE_FONT_FAMILY || "Inter, sans-serif"; // Fallback to "Inter"
    document.body.style.fontFamily = fontFamily; // Apply font globally
  }, []);

  return (
    <div className="App">
      <Navbars />

      <div className="container my-4">
        <HeroSection />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 mb-4">
            <ContractData />
          </div>
        </div>

        <div className="col-lg-12 col-md-12 mb-4">
          <Deposit />
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 mb-4">
            <ReferralLinkData />
          </div>
        </div>

        <div className="col-lg-12 col-md-12 mb-4">
          <Referral />
        </div>

        <div className="col-lg-12 col-md-12 mb-4">
          <Levels />
        </div>
      </div>

      <div className="col-lg-12 col-md-12 mb-4">
        <Footer />
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default App;
