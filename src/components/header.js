import * as React from "react"
import { Link } from "gatsby"

// import boostrap + react-bootstrap
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="nav-button">HOME</Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-button">ABOUT</Nav.Link>
          <Nav.Link as={Link} to="/blog" className="nav-button">BLOG</Nav.Link>
          <Nav.Link as={Link} to="/bucketlist" className="nav-button">BUCKET-LIST</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav>
          {/* Social icons would go here */}
      </Nav>
    </Container>
  </Navbar>
);

export default Header
