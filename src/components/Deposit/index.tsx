import React, { useState } from "react";

const Deposit = () => {
  // Fetch environment variable values with fallback values
  const depositBgColor =
    import.meta.env.VITE_DEPOSIT_DEPOSIT_BG_COLOR || "#111827";
  const textColor =
    import.meta.env.VITE_DEPOSIT_DEPOSIT_TEXT_COLOR || "#ffffff";
  const cardBgColor = import.meta.env.VITE_DEPOSIT_CARD_BG_COLOR || "#192337";
  const buttonColor = import.meta.env.VITE_DEPOSIT_BUTTON_COLOR || "#007bff";
  const buttonTextColor =
    import.meta.env.VITE_DEPOSIT_BUTTON_TEXT_COLOR || "#ffffff"; // Button text color
  const gradientTextStartColor =
    import.meta.env.VITE_DEPOSIT_GRADIENT_TEXT_START_COLOR ||
    "rgb(255, 255, 255)";
  const gradientTextEndColor =
    import.meta.env.VITE_DEPOSIT_GRADIENT_TEXT_END_COLOR ||
    "rgb(255, 255, 255)";
  const inputBgColor = import.meta.env.VITE_DEPOSIT_INPUT_BG_COLOR || "#2a2a3b";
  const smallTextColor =
    import.meta.env.VITE_DEPOSIT_SMALL_TEXT_COLOR || "#f5f5f5";
  const headingTextColor =
    import.meta.env.VITE_DEPOSIT_HEADING_TEXT_COLOR || "#ffffff";
  const incomeValueTextColor =
    import.meta.env.VITE_DEPOSIT_INCOME_VALUE_TEXT_COLOR || "#c8c8c8";
  const inputValueTextColor =
    import.meta.env.VITE_DEPOSIT_INPUT_VALUE_TEXT_COLOR || "#ffffff";
  const withdrawalText =
    import.meta.env.VITE_DEPOSIT_WITHDRAWAL_TEXT ||
    "* Withdrawal at any time you want!";
  const withdrawalTextColor =
    import.meta.env.VITE_DEPOSIT_WITHDRAWAL_TEXT_COLOR || "#ffffff";

  const minDeposit =
    parseFloat(import.meta.env.VITE_DEPOSIT_MIN_DEPOSIT) || 0.5;
  const maxDeposit =
    parseFloat(import.meta.env.VITE_DEPOSIT_MAX_DEPOSIT) || 1000;
  const percentRate =
    parseFloat(import.meta.env.VITE_DEPOSIT_PERCENT_RATE) || 4;

  const [depositAmount, setDepositAmount] = useState<string>("");
  const [perDayIncome, setPerDayIncome] = useState<number>(0);
  const [totalIncomeState, setTotalIncomeState] = useState<number>(0);

  const handleDepositChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value) || 0;
    setDepositAmount(event.target.value);

    if (value >= minDeposit && value <= maxDeposit) {
      const dailyIncome = (value * percentRate) / 100;
      setPerDayIncome(dailyIncome);
      setTotalIncomeState(dailyIncome * 30);
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

              <p
                className="mb-4"
                style={{ fontSize: "1rem", color: smallTextColor }}
              >
                Minimum {minDeposit} BNB | Maximum {maxDeposit} BNB
              </p>

              <button
                id="sendTransaction"
                className="btn btn-lg"
                style={{
                  backgroundColor: buttonColor,
                  color: buttonTextColor, // Use environment variable for button text color
                }}
              >
                Make Deposit
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row g-3">
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
                  <p
                    className="fs-4 fw-bold"
                    style={{ color: incomeValueTextColor }}
                  >
                    {perDayIncome.toFixed(3)} BNB
                  </p>
                </div>
              </div>

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
                  <p
                    className="fs-5 fw-bold"
                    style={{ color: incomeValueTextColor }}
                  >
                    {percentRate}% per day
                  </p>
                </div>
              </div>

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
                  <p
                    className="fs-4 fw-bold"
                    style={{ color: incomeValueTextColor }}
                  >
                    {totalIncomeState.toFixed(3)} BNB
                  </p>
                  <small
                    style={{
                      fontSize: "1rem",
                      color: withdrawalTextColor,
                      marginTop: "30px",
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
