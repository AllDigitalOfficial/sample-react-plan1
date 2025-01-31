const Footer = () => {
  // Get environment variable values with fallback values
  const companyName = import.meta.env.VITE_COPYRIGHT_COMPANY_NAME || "Copyright BnbOath";
  const bgColor = import.meta.env.VITE_COPYRIGHT_BG_COLOR || "#111827";
  const textColor = import.meta.env.VITE_COPYRIGHT_TEXT_COLOR || "#ffffff";

  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="footer-content text-center py-3">
        <p>{companyName} © {currentYear} . All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
