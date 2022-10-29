import { Container, Row, Col } from "react-bootstrap";

function MultiChainContent() {
  return (
    <div className="ml-content mt-5">
      <Container>
        <Row className="align-items-center">
          <Col
            className="d-flex flex-column justify-content-between"
            style={{ height: "350px" }}
          >
            <div className="d-flex align-items-center justify-content-around">
              <p className="mb-0">Binance</p>
              <img width="40px" src="assets/ml1.svg" alt="" />
            </div>
            <div className="d-flex align-items-center justify-content-around">
              <p className="mb-0">Polygon</p>
              <img width="40px" src="assets/ml2.svg" alt="" />
            </div>
            <div className="d-flex align-items-center justify-content-around">
              <p className="mb-0">Moonbeam</p>
              <img width="40px" src="assets/ml3.svg" alt="" />
            </div>
            <div className="d-flex align-items-center justify-content-around">
              <p className="mb-0">Avalanche</p>
              <img width="40px" src="assets/ml4.svg" alt="" />
            </div>
          </Col>
          <Col className="bg-1"></Col>
          <Col>
            <img src="assets/octa.svg" className="img-fluid" alt="" />
          </Col>
          <Col className="bg-2"></Col>
          <Col
            className="d-flex flex-column justify-content-between"
            style={{ height: "280px" }}
          >
            <div className="crd">PancakeSwap Valuts</div>
            <div className="crd">QuickSwap Valuts</div>
            <div className="crd">SolarBeam Vaults</div>
            <div className="crd">Trader Joe Valuts</div>
          </Col>
          <Col className="bg-3"></Col>
          <Col
            className="d-flex flex-column justify-content-between"
            style={{ height: "180px" }}
          >
            <div className="crd">Auto-Comp.Pools</div>
            <div className="crd">Multi-Dex Strategy</div>
            <div className="crd">Maximizer Pools</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default MultiChainContent;
