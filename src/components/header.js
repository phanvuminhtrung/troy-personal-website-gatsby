import * as React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// import boostrap + react-bootstrap
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => (
  <header className="sticky-top bg-dark">
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container fluid className="px-3">
        {/* Hamberger nav */}
        <div className="me-2">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        {/* Default nav */}
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-start">
          <Nav>
            <Nav.Link as={Link} to="/" className="nav-button text-white me-4" activeClassName="active">HOME</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-button text-white me-4" activeClassName="active">ABOUT</Nav.Link>
            <NavDropdown id="nav-dropdown" className="nav-button text-white me-4" title="TOOLS-I-BUILT">
            <NavDropdown.Item as={Link} className="nav-sub-button" to="https://pointpokertroyphan.netlify.app/" target="_blank">POINT POKER</NavDropdown.Item>
              <NavDropdown.Item as={Link} className="nav-sub-button" to="https://wheelgamestroyphan.netlify.app/" target="_blank">WHEEL GAME</NavDropdown.Item>
              <NavDropdown.Item as={Link} className="nav-sub-button" to="https://todolistjstroyphan.netlify.app/" target="_blank">TO DO LIST</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/blog" className="nav-button text-white me-4" activeClassName="active">BLOG</Nav.Link>
            <Nav.Link as={Link} to="/tool" className="nav-button text-white me-2" activeClassName="active">TOOLS-I-USED</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* Social media nav links */}
        <Nav className="flex-row">
          <Nav.Link className="custom-divider me-2 text-center">|</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/vuphanit/" target="_blank" className="text-white me-2">
            <FaLinkedin />
          </Nav.Link>
          <Nav.Link href="https://github.com/phanvuminhtrung" target="_blank" className="text-white me-2">
            <FaGithub />
          </Nav.Link>
          <Nav.Link href="mailto:troyphan98@gmail.com" className="text-white me-2">
            <FaEnvelope />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </header>
);

export default Header
