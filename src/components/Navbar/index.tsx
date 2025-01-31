import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";

const Navbars = () => {
  const {
    VITE_APP_NAVBAR_BG_COLOR: navbarBgColor = "#292d36",
    // VITE_APP_NAVBAR_TEXT_COLOR: navbarTextColor = "#ffffff",
    VITE_APP_BUTTON_BG_COLOR: buttonBgColor = "#007bff",
    VITE_APP_BUTTON_TEXT_COLOR: buttonTextColor = "#ffffff",
    VITE_APP_BUTTON_BORDER_COLOR: buttonBorderColor = "#007bff",
    VITE_APP_DEPOSIT_LINK: depositLink = "#deposit",
  } = import.meta.env;

  return (
    <Navbar
      fixed="top"
      className="py-2 py-lg-3"
      style={{
        backgroundColor: navbarBgColor,
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Container>
        <Row className="w-100">
          {/* Logo Section */}
          <Col
            xs={12}
            lg={6}
            className="text-center text-lg-start mb-3 mb-lg-0"
          >
            <Navbar.Brand href="#home" className="navbar-brand-custom">
              <img alt="Logo" src="/bnbbond.png" className="logo" width={150} />
            </Navbar.Brand>
          </Col>

          {/* Buttons Section */}
          <Col
            xs={12}
            lg={6}
            className="d-flex justify-content-center justify-content-lg-end"
          >
            <Nav className="w-100 d-flex justify-content-between">
              <Button
                className="btn w-50 ms-2"
                onClick={() => (window.location.href = depositLink)}
                style={{
                  backgroundColor: buttonBgColor,
                  color: buttonTextColor,
                  border: `2px solid ${buttonBorderColor}`,
                }}
              >
                Deposit
              </Button>
              <Button
                className="btn w-50 ms-2"
                style={{
                  backgroundColor: buttonBgColor,
                  color: buttonTextColor,
                  border: `2px solid ${buttonBorderColor}`,
                }}
              >
                Connect Wallet
              </Button>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Navbars;
