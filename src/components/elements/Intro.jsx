import { Container, Row, Col } from "react-bootstrap";

function Intro() {
  return (
    <div className="intro my-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="mb-3">
            <h3 class="txt-primary">
              Invest <span>The Right Way</span>
            </h3>
            <h4>Supercharge Your Returns</h4>
            <h2>Save Time & Gas Fees Through Automation</h2>
          </Col>
          <Col lg={7} className="mb-3">
            <Row>
              <Col className="mb-3 box" lg={5}>
                <span>Highest Auto</span>
                <p>Compounding Pools</p>
                <div className="d-flex justify-content-center">
                  <div>
                    <small className="txt-primary">upto</small>
                    <h1>7,000%</h1>
                  </div>
                </div>
                <p className="text-center text-primary fw-bold">
                  Annual Percentage Yield
                </p>
              </Col>
              <Col className="mb-3 offset-lg-1 box" lg={6}>
                <span>Projected </span>
                <p>Total Value Locked (TVL)</p>
                <div className="d-flex justify-content-center">
                  <div className="fw-bold d-flex align-items-end">
                    <h4 className="fw-bold mb-1">$</h4>
                    <h1 className="mb-0">538.4</h1>
                    <h4 className="fw-bold mb-1">M</h4>
                  </div>
                </div>
                <p className="text-center text-primary fw-bold mt-4">
                  Within 6 Months of Launch
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Intro;
