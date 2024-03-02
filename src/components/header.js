import * as React from "react"
import { Link } from "gatsby"

// import boostrap + react-bootstrap
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => (
  <header className="sticky-top bg-dark">
    <Navbar>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link as={Link} to="/" className="nav-button text-white" activeClassName="active">HOME</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-button text-white" activeClassName="active">ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/blog" className="nav-button text-white" activeClassName="active">BLOG</Nav.Link>
            <Nav.Link as={Link} to="/bucketlist" className="nav-button text-white" activeClassName="active">BUCKET-LIST</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
            {/* Social icons would go here */}
        </Nav>
      </Container>
    </Navbar>
  </header>
);

export default Header
