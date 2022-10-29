import { Container, Navbar, Nav } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <Navbar expand="lg" className="pt-3 header">
      <Container>
        <Navbar.Brand href="#home">
          <img src="assets/logo.png" width="150px" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars size={25} color="gray" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Overview</Nav.Link>
            <Nav.Link href="#link">Traction</Nav.Link>
            <Nav.Link href="#link">Tokenomics</Nav.Link>
            <Nav.Link href="#link">Roadmap</Nav.Link>
            <Nav.Link href="#link">FAQs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
