import { Col, Container, Row } from "react-bootstrap";

const cardData = [
  {
    img: "trading-fee.svg",
    heading: "Trading Fee Revenue",
    text: "Earn higher APYs from DEX trading revenue and OCTF",
  },
  {
    img: "trading-fee.svg",
    heading: "Trading Fee Revenue",
    text: "Earn higher APYs from DEX trading revenue and OCTF",
  },
  {
    img: "trading-fee.svg",
    heading: "Trading Fee Revenue",
    text: "Earn higher APYs from DEX trading revenue and OCTF",
  },
  {
    img: "trading-fee.svg",
    heading: "Trading Fee Revenue",
    text: "Earn higher APYs from DEX trading revenue and OCTF",
  },
  {
    img: "trading-fee.svg",
    heading: "Trading Fee Revenue",
    text: "Earn higher APYs from DEX trading revenue and OCTF",
  },
  {
    img: "trading-fee.svg",
    heading: "Trading Fee Revenue",
    text: "Earn higher APYs from DEX trading revenue and OCTF",
  },
];

function Tokenomics() {
  return (
    <div className="tokenomics">
      <Container>
        <Row>
          <h1 className="mb-3">Token Allocation</h1>
          <Col className="mb-4 text-center" md={3}>
            <p className="mb-0">Ticker</p>
            <h1 className="text-primary">OCTF</h1>
          </Col>
          <Col className="mb-4 text-center" md={3}>
            <p className="mb-0">Network</p>
            <h1 className="text-primary">BSC</h1>
          </Col>
          <Col className="mb-4 text-center" md={3}>
            <p className="mb-0">Total Fixed Supply</p>
            <h1 className="text-primary">10 Million</h1>
          </Col>
          <Col className="mb-4 text-center" md={3}>
            <p className="mb-0">Emission</p>
            <h1 className="text-primary">2 Years</h1>
          </Col>
        </Row>
      </Container>

      <div className="waves-bg">
        <Container>
          <Row className="align-items-center">
            <Col
              md={6}
              className="mb-4 d-flex align-items-center justify-content-around"
            >
              <img src="assets/chart.png" width="200px" alt="" />
            </Col>
            <Col md={6} className="mb-4">
              <img src="assets/token.png" className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className="mt-4">
          <h1>Token Value-Accrual & Utility</h1>
          <p className="txt-shadow lead">
            OCTF is predicated on a fixed-supply model that is integrated with a
            continual buyback-and-burn mechanism for maximum value-accrual and
            token value sustainability.
          </p>
          {cardData.map((item, index) => (
            <Col key={index} md={4} className="my-3">
              <div className="crd">
                <img src={`assets/${item.img}`} width="50px" alt="" />
                <h4 className="mt-5">{item.heading}</h4>
                <p className="lead">{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Tokenomics;
