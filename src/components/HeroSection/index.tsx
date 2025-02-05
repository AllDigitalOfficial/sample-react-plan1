import React from "react";
import { Container } from "react-bootstrap";

const HeroSection: React.FC = () => {
  // Get environment variable values for HeroSection
  const heroBgColor = import.meta.env.VITE_APP_HERO_BG_COLOR || "#292d36";
  const heroTextColor = import.meta.env.VITE_APP_HERO_TEXT_COLOR || "#ffffff";
  const buttonColor = import.meta.env.VITE_APP_HERO_BUTTON_COLOR || "#007bff";
  const buttonOutlineColor =
    import.meta.env.VITE_APP_HERO_BUTTON_OUTLINE_COLOR || "#007bff";
  const presentationLink =
    import.meta.env.VITE_APP_HERO_PRESENTATION_LINK || "bnbbond.pdf";
  const smartContractLink =
    import.meta.env.VITE_APP_HERO_SMART_CONTRACT || "#smart-contract";
  const rightSectionBgColor =
    import.meta.env.VITE_APP_HERO_RIGHT_SECTION_BG_COLOR || "#212529";
  const titleColor = import.meta.env.VITE_APP_HERO_TITLE_COLOR || "#ffd700";
  const profitTextColor =
    import.meta.env.VITE_APP_HERO_PROFIT_TEXT_COLOR || "#ffffff";
  const profitSectionBgColor =
    import.meta.env.VITE_APP_HERO_PROFIT_SECTION_BG_COLOR || "#292d36";

  // Get balance data from environment variables
  const contractBalance =
    import.meta.env.VITE_APP_HERO_CONTRACT_BALANCE || "0.000 BNB";
  const contractBalanceColor =
    import.meta.env.VITE_APP_HERO_CONTRACT_BALANCE_COLOR || "#28a745";
  const basicInterestRate =
    import.meta.env.VITE_APP_HERO_BASIC_INTEREST_RATE || "0.5% every 24 hrs";
  const holdBonus =
    import.meta.env.VITE_APP_HERO_HOLD_BONUS ||
    "+0.1% for every 24 hrs without withdrawal";
  const contractAmountBonus =
    import.meta.env.VITE_APP_HERO_CONTRACT_AMOUNT_BONUS ||
    "+0.1% for every 500 BNB on platform address balance";

  // Heading text from environment variable
  const headingText = import.meta.env.VITE_APP_HERO_HEADING_TEXT || "Empowering Trust and Transparency with BNB Smart Contracts!";

  return (
    <Container
      fluid
      style={{
        backgroundColor: heroBgColor,
        color: heroTextColor,
        position: "relative",
        marginTop: "150px", // Ensures the content is not hidden behind the navbar on mobile
      }}
    >
      <div className="row align-items-center g-4" style={{ minHeight: "600px" }}>
        {/* Left Section: Profit Info */}
        <div className="col-lg-6 col-md-6 d-flex">
          <div
            className="w-100 p-4 rounded d-flex flex-column"
            style={{
              backgroundColor: profitSectionBgColor,
              color: profitTextColor,
              border: "none",
              boxShadow: "none",
            }}
          >
            <h2
              className="fw-bold mb-4"
              style={{
                color: profitTextColor,
                marginTop: "-20px",
                fontSize: "2.5rem",
              }}
            >
              {headingText.split("\n").map((line:number, index:number) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h2>
            <div>
              <p className="mb-0" style={{ color: profitTextColor }}>
                <strong>Basic interest rate:</strong>{" "}
                <span style={{ color: profitTextColor, fontWeight: "700" }}>
                  {basicInterestRate}
                </span>
              </p>
              <p className="mb-0" style={{ color: profitTextColor }}>
                <strong>Personal hold-bonus:</strong>{" "}
                <span style={{ color: profitTextColor, fontWeight: "700" }}>
                  {holdBonus}
                </span>
              </p>
              <p className="mb-0" style={{ color: profitTextColor }}>
                <strong>Contract total amount bonus:</strong>{" "}
                <span style={{ color: profitTextColor, fontWeight: "700" }}>
                  {contractAmountBonus}
                </span>
              </p>
            </div>
            <div className="d-flex flex-wrap gap-3 mt-4 justify-content-start">
              <a
                href={presentationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn hero-button"
                style={{
                  backgroundColor: buttonColor,
                  color: "#fff",
                  border: "none",
                }}
              >
                Presentation
              </a>
              <a
                href={smartContractLink}
                className="btn hero-button"
                style={{
                  color: buttonOutlineColor,
                  border: `2px solid ${buttonOutlineColor}`,
                  background: "transparent",
                }}
              >
                Smart Contract
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Contract Balance */}
        <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
          <div
            style={{
              backgroundColor: rightSectionBgColor,
              borderRadius: "15px",
              padding: "20px",
              color: heroTextColor,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              maxWidth: "500px",
              width: "100%",
            }}
          >
            {/* Title */}
            <h3
              style={{
                color: titleColor,
                textAlign: "center",
                marginBottom: "15px",
              }}
            >
              Current Contract Balance
            </h3>

            {/* Contract Balance */}
            <div style={{ marginBottom: "20px", textAlign: "center" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: contractBalanceColor,
                }}
              >
                {contractBalance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
