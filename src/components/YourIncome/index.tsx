import { getCardDataReferralLink } from "../../utils/utils_Components"; // Adjust the path if needed

const ReferralLinkData = () => {
  const bgColor = import.meta.env.VITE_APP_REFERRAL_LINK_INCOME_BG_COLOR || "#192337";
  const textColor = import.meta.env.VITE_APP_REFERRAL_LINK_INCOME_TEXT_COLOR || "#ffffff";
  const buttonColor = import.meta.env.VITE_APP_BUTTON_INCOME_COLOR || "#007bff";
  const buttonTextColor = import.meta.env.VITE_APP_BUTTON_INCOME_TEXT_COLOR || "#ffffff";
  const cardBgColor = import.meta.env.VITE_APP_CARD_INCOME_BG_COLORR || "#1f2833";
  const cardBoxShadow = import.meta.env.VITE_APP_CARD_INCOME_BOX_SHADOW || "rgba(0, 0, 0, 0.3) 0px 4px 15px";
  const cardBorderColor = import.meta.env.VITE_APP_CARD_INCOME_BORDER_COLOR || "#2D4C70";
  const referralAmountColor = import.meta.env.VITE_APP_REFERRAL_AMOUNT_INCOME_COLOR || "#ffffff";
  const userDividendsColor = import.meta.env.VITE_APP_USER_DIVIDENDS_INCOME_COLOR || "#ffffff";
  const withdrawableBalanceColor = import.meta.env.VITE_APP_WITHDRAWABLE_BALANCE_INCOME_COLOR || "#ffffff";

  const referralAmount = import.meta.env.VITE_APP_REFERRAL_AMOUNT_INCOME || "1.5";
  const userDividends = import.meta.env.VITE_APP_USER_DIVIDENDS_INCOME || "0.8";
  const withdrawableBalance = import.meta.env.VITE_APP_WITHDRAWABLE_BALANCE_INCOME || "2.0";
  const userDeposit = import.meta.env.VITE_APP_USER_DEPOSIT_INCOME || "5.0";
  const userReturns = import.meta.env.VITE_APP_USER_RETURNS_INCOME || "1.2";
  const totalWithdrawn = import.meta.env.VITE_APP_TOTAL_WITHDRAWNN_INCOME || "1.000";
  const percentRate = import.meta.env.VITE_APP_PERCENT_RATE_INCOME || "12%";

  const referralLinkData = { userDeposit, userReturns, totalWithdrawn, percentRate };
  const cardData = getCardDataReferralLink(referralLinkData);

  return (
    <div className="expart-team-area py-5" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="row g-4">
          {/* Left Section */}
          <div className="col-lg-8">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {cardData.map((card, index) => (
                <div className="col" key={index}>
                  <div
                    className="card shadow-lg p-4 h-100"
                    style={{
                      backgroundColor: cardBgColor,
                      color: textColor,
                      borderRadius: "15px",
                      boxShadow: cardBoxShadow,
                      border: `1px solid ${cardBorderColor}`,
                    }}
                  >
                    <h3>{card.title}</h3>
                    <p className="fs-4 fw-bold">{card.value} <span>BNB</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Combined Single Box */}
          <div className="col-lg-4">
            <div
              className="card shadow-lg p-4 d-flex flex-column h-100"
              style={{
                backgroundColor: cardBgColor,
                color: textColor,
                borderRadius: "15px",
                boxShadow: cardBoxShadow,
                border: `1px solid ${cardBorderColor}`,
              }}
            >
              {/* Referral Amount */}
              <div className="mb-3">
                <h4>Referral Amount Available</h4>
                <p className="fs-4 fw-bold" style={{ color: referralAmountColor }}>
                  {referralAmount} BNB
                </p>
              </div>

              {/* User Dividends */}
              <div className="mb-3">
                <h4>User Dividends Available</h4>
                <p className="fs-4 fw-bold" style={{ color: userDividendsColor }}>
                  {userDividends} BNB
                </p>
              </div>

              {/* Withdrawable Balance */}
              <div className="d-flex flex-column mt-auto">
                <h4>Total Withdrawable Balance</h4>
                <p className="fs-4 fw-bold" style={{ color: withdrawableBalanceColor }}>
                  {withdrawableBalance} BNB
                </p>
                <button
                  className="btn mt-3"
                  style={{
                    backgroundColor: buttonColor,
                    color: buttonTextColor,
                  }}
                >
                  Withdrawal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralLinkData;
