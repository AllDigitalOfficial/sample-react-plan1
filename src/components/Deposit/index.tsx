import React, { useState } from "react";

const Deposit = () => {
  // Fetch environment variable values with fallback values
  const depositBgColor = import.meta.env.VITE_DEPOSIT_BG_COLOR || "#111827";
  const textColor = import.meta.env.VITE_DEPOSIT_TEXT_COLOR || "#ffffff";
  const cardBgColor = import.meta.env.VITE_CARD_BG_COLOR || "#192337";
  const buttonColor = import.meta.env.VITE_BUTTON_COLOR || "#007bff";
  const buttonHoverColor = import.meta.env.VITE_BUTTON_HOVER_COLOR || "#0056b3";
  const gradientTextStartColor =
    import.meta.env.VITE_GRADIENT_TEXT_START_COLOR || "rgb(255, 255, 255)";
  const gradientTextEndColor =
    import.meta.env.VITE_GRADIENT_TEXT_END_COLOR || "rgb(255, 255, 255)";
  const inputBgColor = import.meta.env.VITE_INPUT_BG_COLOR || "#2a2a3b";
  const placeholderColor = import.meta.env.VITE_PLACEHOLDER_TEXT_COLOR || "rgb(128, 128, 128)";
  const smallTextColor = import.meta.env.VITE_SMALL_TEXT_COLOR || "#f5f5f5";
  const labelColor = import.meta.env.VITE_LABEL_COLOR || "#ffffff";
  const headingTextColor = import.meta.env.VITE_HEADING_TEXT_COLOR || "#ffffff"; // Heading color
  const incomeValueTextColor = import.meta.env.VITE_INCOME_VALUE_TEXT_COLOR || "#c8c8c8"; // Income value color
  const inputValueTextColor = import.meta.env.VITE_INPUT_VALUE_TEXT_COLOR || "#ffffff"; // Input value color
  const withdrawalText = import.meta.env.VITE_WITHDRAWAL_TEXT || "* Withdrawal at any time you want!";
  const withdrawalTextColor = import.meta.env.VITE_WITHDRAWAL_TEXT_COLOR || "#ffffff"; // Withdrawal text color
  const withdrawalTextMargin = import.meta.env.VITE_WITHDRAWAL_TEXT_MARGIN || "20px"; // Margin for withdrawal text

  const minDeposit = parseFloat(import.meta.env.VITE_MIN_DEPOSIT) || 0.5;
  const maxDeposit = parseFloat(import.meta.env.VITE_MAX_DEPOSIT) || 1000;
  const depositIncome = parseFloat(import.meta.env.VITE_DEPOSIT_INCOME) || 0.0;
  const percentRate = parseFloat(import.meta.env.VITE_PERCENT_RATE) || 4;
  const totalIncome = parseFloat(import.meta.env.VITE_TOTAL_INCOME) || 0.0;

  const [depositAmount, setDepositAmount] = useState<string>(""); // Deposit amount input
  const [perDayIncome, setPerDayIncome] = useState<number>(depositIncome); // Per day income
  const [totalIncomeState, setTotalIncomeState] = useState<number>(totalIncome); // Total income

  const handleDepositChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value) || 0;
    setDepositAmount(event.target.value);

    // Calculate per day income and total income based on deposit value
    if (value >= minDeposit && value <= maxDeposit) {
      const dailyIncome = (value * percentRate) / 100;
      setPerDayIncome(dailyIncome);
      setTotalIncomeState(dailyIncome * 30); // Assuming 30 days for total income
    } else {
      setPerDayIncome(0);
      setTotalIncomeState(0);
    }
  };

  return (
    <div
      id="deposit"
      className="deposit-area py-5"
      style={{
        backgroundColor: depositBgColor,
        minHeight: "30vh",
        paddingTop: "50px",
      }}
    >
      <div className="container">
        <div className="row g-4">
          {/* Right Section - Deposit Input Form (now on the left side) */}
          <div className="col-lg-6">
            <div
              className="card p-4 shadow-lg h-100"
              style={{
                backgroundColor: cardBgColor,
                borderRadius: "15px",
                color: textColor,
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h3
                className="fw-bold mb-4"
                style={{
                  backgroundImage: `linear-gradient(to right, ${gradientTextStartColor}, ${gradientTextEndColor})`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "1.75rem",
                }}
              >
                Make Deposit
              </h3>

              <div className="input-group mb-3">
                <input
                  id="depositAmount"
                  type="number"
                  className="form-control"
                  placeholder="Enter BNB"
                  style={{
                    backgroundColor: inputBgColor,
                    color: inputValueTextColor,
                    border: "none",
                    fontSize: "1.125rem",
                  }}
                  value={depositAmount}
                  onChange={handleDepositChange}
                  min={minDeposit}
                  max={maxDeposit}
                  step="0.01"
                />
              </div>

              <p className="mb-4" style={{ fontSize: "1rem", color: smallTextColor }}>
                Minimum {minDeposit} BNB | Maximum {maxDeposit} BNB
              </p>

              <button
                id="sendTransaction"
                className="btn btn-lg"
                style={{
                  backgroundColor: buttonColor,
                  color: "#ffffff", // Correcting the button text color
                }}
              >
                Make Deposit
              </button>
            </div>
          </div>

          {/* Left Section - Deposit Information (now on the right side) */}
          <div className="col-lg-6">
            <div
              className="row g-3"
            >
              {/* Per Day Card */}
              <div className="col-12">
                <div
                  className="card p-3 shadow-lg"
                  style={{
                    backgroundColor: cardBgColor,
                    color: textColor,
                    borderRadius: "15px",
                  }}
                >
                  <h5 className="fw-bold" style={{ color: headingTextColor }}>
                    Per Day:
                  </h5>
                  <p className="fs-4 fw-bold" style={{ color: incomeValueTextColor }}>
                    {perDayIncome.toFixed(3)} BNB
                  </p>
                </div>
              </div>

              {/* Percent Rate Card */}
              <div className="col-12">
                <div
                  className="card p-3 shadow-lg"
                  style={{
                    backgroundColor: cardBgColor,
                    color: textColor,
                    borderRadius: "15px",
                  }}
                >
                  <h5 className="fw-bold" style={{ color: headingTextColor }}>
                    Percent Rate:
                  </h5>
                  <p className="fs-5 fw-bold" style={{ color: incomeValueTextColor }}>
                    {percentRate}% per day
                  </p>
                </div>
              </div>

              {/* Total Income Card */}
              <div className="col-12">
                <div
                  className="card p-3 shadow-lg"
                  style={{
                    backgroundColor: cardBgColor,
                    color: textColor,
                    borderRadius: "15px",
                  }}
                >
                  <h5 className="fw-bold" style={{ color: headingTextColor }}>
                    Total Income:
                  </h5>
                  <p className="fs-4 fw-bold" style={{ color: incomeValueTextColor }}>
                    {totalIncomeState.toFixed(3)} BNB
                  </p>
                  {/* Withdrawal Info Added here */}
                  <small
                    style={{
                      fontSize: "1rem",
                      color: withdrawalTextColor,
                      marginTop: "10px", // You can adjust the margin as needed
                    }}
                  >
                    {withdrawalText}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
