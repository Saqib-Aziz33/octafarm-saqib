import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <footer className="footer container-fluid p-2">
      <Container>
        <Row className="my-4">
          <Col xs={6} md={3}>
            <h6 className="heading">Comapny</h6>
            <ul>
              <li>
                <a href="#">Bug Bounty</a>
              </li>
              <li>
                <a href="#">Jobs/Career</a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <h6 className="heading">Developer</h6>
            <ul>
              <li>
                <a href="#">Octa Farm Documentation</a>
              </li>
              <li>
                <a href="#">Explore Github</a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <h6 className="heading">Community</h6>
            <ul>
              <li>
                <a href="#">Telegram</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <h6 className="heading">Legal</h6>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />

        <Row className="mt-4">
          <Col className="mb-3" sm={4}>
            <img src="assets/logo.png" width="150px" alt="" />
          </Col>
          <Col className="mb-3 text-center" sm={4}>
            <p className="mb-0">© 2021-22 Octa Farm. All rights reserved.</p>
          </Col>
          <Col className="mb-3" sm={4}>
            <ul className="d-flex gap-2 justify-content-end icons">
              <li>
                <a href="#">
                  <img src="assets/github.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/twitter.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/telegram.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/insta.svg" alt="" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
