import React, { useState, useEffect } from "react";

const Referral: React.FC = () => {
  // Get environment variable values with fallback values
  const bgColor = import.meta.env.VITE_APP_REFERRAL_REFERRAL_BG_COLOR || "#111827";
  const textColor = import.meta.env.VITE_APP_REFERRAL_REFERRAL_TEXT_COLOR || "#ffffff";
  const cardBgColor = import.meta.env.VITE_APP_REFERRAL_CARDD_BG_COLOR || "#192337";
  const cardTextColor = import.meta.env.VITE_APP_REFERRAL_CARD_TEXT_COLOR || "#ffffff";
  const buttonColor = import.meta.env.VITE_APP_REFERRAL_BUTTON_COLOR || "#007bff";
  const buttonHoverColor = import.meta.env.VITE_APP_REFERRAL_BUTTON_HOVER_COLOR || "#0056b3";
  const buttonHoverTextColor = import.meta.env.VITE_APP_REFERRAL_BUTTON_HOVER_TEXT_COLOR || "#ffffff";
  const totalReward = import.meta.env.VITE_APP_REFERRAL_TOTAL_REWARD || "0.000 BNB";
  const totalCount = import.meta.env.VITE_APP_REFERRAL_TOTAL_COUNT || 0;
  const toastBgColor = import.meta.env.VITE_APP_REFERRAL_TOAST_BG_COLOR || "#959c9c";
  const toastTextColor = import.meta.env.VITE_APP_REFERRAL_TOAST_TEXT_COLOR || "#ffffff";
  const toastShadowColor = import.meta.env.VITE_APP_REFERRAL_TOAST_SHADOW_COLOR || "rgba(0, 0, 0, 0.2)";
  const messageBgColor = import.meta.env.VITE_APP_REFERRAL_MESSAGE_BG_COLOR || "rgba(255, 255, 255, 0.1)";
  const messageBorderColor = import.meta.env.VITE_APP_REFERRAL_MESSAGE_BORDER_COLOR || "rgba(255, 255, 255, 0.2)";

  const [showToast, setShowToast] = useState(false);

  const handleCopyLink = () => {
    const referralLink = "https://your-referral-link.com";
    navigator.clipboard.writeText(referralLink).then(() => {
      setShowToast(true);
    });
  };

  useEffect(() => {
    let timer: number;
    if (showToast) {
      timer = window.setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showToast]);

  // Common Style Variables
  const commonButtonStyles: React.CSSProperties = {
    borderColor: buttonColor,
    color: buttonColor,
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
  };

  const commonToastStyles: React.CSSProperties = {
    position: "absolute",
    top: "-40px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 9999,
    backgroundColor: toastBgColor,
    color: toastTextColor,
    padding: "8px 12px",
    borderRadius: "5px",
    boxShadow: `0 2px 4px ${toastShadowColor}`,
    fontWeight: "bold",
    whiteSpace: "nowrap",
    fontSize: "14px",
  };

  const commonMessageStyles: React.CSSProperties = {
    backgroundColor: messageBgColor,
    border: `1px solid ${messageBorderColor}`,
    color: textColor,
    fontWeight: "bold",
    fontSize: "18px",
    maxWidth: "100%",
    wordBreak: "break-word",
  };

  return (
    <div className="roadmap-area py-5" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="referral">
          <h2 className="mb-4" style={{ color: textColor, textAlign: "center" }}>
            Referral Program
          </h2>

          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center mb-4">
            <div
              className="referral-message p-3 rounded mb-3 mb-md-0 me-md-3"
              style={commonMessageStyles}
            >
              You will get your referral link after investing...
            </div>

            <div style={{ position: "relative" }}>
              <button
                id="copyButton"
                className="btn btn-outline-primary"
                style={commonButtonStyles}
                onClick={handleCopyLink}
                onMouseOver={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = buttonHoverColor;
                  (e.target as HTMLButtonElement).style.color = buttonHoverTextColor;
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
                  (e.target as HTMLButtonElement).style.color = buttonColor;
                }}
              >
                Copy Link
              </button>

              {showToast && (
                <div style={commonToastStyles}>
                  Referral link copied to clipboard!
                </div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card shadow-sm p-3" style={{ backgroundColor: cardBgColor, color: cardTextColor }}>
                <h3>Total Reward</h3>
                <p id="userTotalReferralBonus" className="fs-4 fw-bold">
                  {totalReward}
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="card shadow-sm p-3" style={{ backgroundColor: cardBgColor, color: cardTextColor }}>
                <h3>Total Referral</h3>
                <p id="countdownline" className="fs-4 fw-bold">
                  {totalCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
