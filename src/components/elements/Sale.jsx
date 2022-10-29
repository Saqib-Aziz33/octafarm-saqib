import { Col, Container, Row } from "react-bootstrap";

function Sale() {
  return (
    <div className="sale my-5 py-4">
      <Container>
        <Row className="text-center">
          <Col className="mb-4" lg={4}>
            <div className="crd">
              <div className="bdg">completed</div>
              <h4 className="txt-primary mb-0">PRIVATE SALE</h4>
              <span>13th Jan, 2022</span>
              <div className="my-3">
                <small className="txt-primary">BONUS</small>
                <h1>7%</h1>
              </div>
              <p className="mb-0">
                <b>Allocation</b> 1.5% Tokens
              </p>
              <p>
                <b>Price</b> 1 BNB ≈ 691.93 OCTF
              </p>
            </div>
          </Col>
          <Col className="mb-4 offset-lg-1" lg={3}>
            <div className="crd">
              <div className="bdg">completed</div>
              <h4 className="txt-primary mb-0">PRE SALE</h4>
              <span>13th Jan, 2022@Pink Sale</span>
              <div className="my-3">
                <small className="txt-primary">BONUS</small>
                <h1>3%</h1>
              </div>
              <p className="mb-0">
                <b>Allocation</b> 1.5% Tokens
              </p>
              <p>
                <b>Price</b> 1 BNB ≈ 691.93 OCTF
              </p>
            </div>
          </Col>
          <Col className="mb-4 offset-lg-1" lg={3}>
            <div className="crd">
              <div className="bdg red">Live now</div>

              <h4 className="txt-primary mb-0">Listing</h4>
              <span>PancakeSwap</span>
              <div className="my-3">
                <small className="txt-primary">BONUS</small>
                <h1>$0.75</h1>
              </div>
              <p className="mb-0">
                <b>Allocation</b> 1.5% Tokens
              </p>
              <p>
                <b>Price</b> 1 BNB ≈ 691.93 OCTF
              </p>
              <button className="primary-btn">Buy Now</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Sale;
