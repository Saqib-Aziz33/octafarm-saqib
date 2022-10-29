import { Col, Container, Row } from "react-bootstrap";

function Hero() {
  return (
    <div className="hero">
      <Container>
        <Row>
          <Col className="mb-4" md={6}>
            <h1 className="fw-bold">
              Maximize Staking Returns <br />
              with Auto-Compounding
            </h1>
            <h3 className="text-primary mt-2">
              Automate your DeFi reinvestment with Octafarm to compound your
              returns even when you sleep!
            </h3>
            <button className="primary-btn my-4">Buy On Pancakeswap</button>
            <p>
              <code>
                Official Contract: <br />{" "}
                0x04d4F38Dcdfe976Cb325dB16b868F0020104014e
              </code>
            </p>
            <div className="d-flex gap-4">
              <button className="secondary-btn">Launch App</button>
              <button className="secondary-btn">Documentation</button>
            </div>
          </Col>
          <Col className="mb-4" md={6}>
            <iframe
              width="100%"
              height="340"
              src="https://www.youtube.com/embed/qF7dkrce-mQ"
              title="Bitcoin ₿ in 100 Seconds // Build your Own Blockchain"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="media-img mt-5">
          <Col className="mb-3" xs={6} sm={4}>
            <img src="assets/mi1.png" alt="" />
          </Col>
          <Col className="mb-3" xs={6} sm={4}>
            <img src="assets/mi2.png" alt="" />
          </Col>
          <Col className="mb-3" xs={6} sm={4}>
            <img src="assets/mi3.svg" alt="" />
          </Col>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2840"
            height="2"
            viewBox="0 0 2840 2"
            fill="none"
          >
            <path
              d="M-15 1H2855"
              stroke="white"
              stroke-opacity="0.15"
              stroke-linejoin="round"
              stroke-dasharray="1 5"
            ></path>
            <path
              d="M0 1H33"
              stroke="url(#footer_grad)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="shoot-right"
            ></path>
            <defs>
              <linearGradient
                id="footer_grad"
                x1="0"
                y1="2"
                x2="33"
                y2="2"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="5%" stop-color="#61CDEF" stop-opacity="0"></stop>
                <stop offset="95%" stop-color="#61CDEF"></stop>
              </linearGradient>
            </defs>
          </svg>
          <Col className="mb-3" xs={6} sm={4}>
            <img src="assets/mi4.png" alt="" />
          </Col>
          <Col className="mb-3" xs={6} sm={4}>
            <img src="assets/mi5.png" alt="" />
          </Col>
          <Col className="mb-3" xs={6} sm={4}>
            <img src="assets/mi6.png" alt="" />
          </Col>
        </Row>
      </Container>
      <div className="imgs">
        <img className="h-img h-img-1" src="assets/hm-1.png" alt="" />
        <img className="h-img h-img-2" src="assets/hm-2.png" alt="" />
      </div>
    </div>
  );
}
export default Hero;
