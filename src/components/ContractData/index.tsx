import {
  getCardDataContractData,
  CardData,
} from "../../utils/utils_Components"; // Adjust the path if needed

const ContractData = () => {
  // Fetching values from environment variables with fallback values
  const depositAmount = import.meta.env.VITE_APP_CONTRACT_DEPOSIT_AMOUNT || "0.600 BNB";
  const totalUsers = import.meta.env.VITE_APP_CONTRACT_TOTAL_USERS || "9";
  const withdrawnAmount =
    import.meta.env.VITE_APP_CONTRACT_WITHDRAWN_AMOUNT || "0.408 BNB";
  const refRewardsAmount =
    import.meta.env.VITE_APP_CONTRACT_REF_REWARDS_AMOUNT || "0.052 BNB";

  // Define environment variables for styles
  const cardBgColor = import.meta.env.VITE_APP_CONTRACT_CARD_BG_COLOR || "#121212";
  const contractBalanceColor =
    import.meta.env.VITE_APP_CONTRACT_BALANCE_COLOR || "#2d4c70";
  const cardTextColor = import.meta.env.VITE_APP_CONTRACT_CARD_TEXT_COLOR || "#ffffff";
  const cardTitleColor = import.meta.env.VITE_APP_CONTRACT_CARD_TITLE_COLOR || "#FFD700"; // Color for card titles

  // Create an object with all the necessary data
  const contractData = {
    depositAmount,
    totalUsers,
    withdrawnAmount,
    refRewardsAmount,
  };

  // Get the data for cards using the utility function
  const cardData: CardData[] = getCardDataContractData(contractData);

  return (
    <div className="container py-5">
      {/* Statistic Cards */}
      <div className="row g-4">
        {cardData.map((card: CardData) => (
          <div key={card.id} className="col-md-6 col-lg-3">
            <div
              className="card p-4 text-center shadow-sm h-100"
              style={{
                backgroundColor: cardBgColor,
                border: `1px solid ${contractBalanceColor}`,
                borderRadius: "15px",
              }}
            >
              {/* Card Title */}
              <h5
                className="mt-3"
                style={{
                  color: cardTitleColor, // Use dynamic card title color from .env
                }}
              >
                {card.title}
              </h5>

              {/* Card Value */}
              <p id={card.id} className="fs-5 fw-bold" style={{ color: cardTextColor }}>
                {card.value} {card.unit && <span>{card.unit}</span>}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractData;
