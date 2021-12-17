import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link style={{color: 'white', textDecoration: 'none'}} to="/">
            Mixology-App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link style={{color: "white", textDecoration: "none", marginRight: 10}} to="/addDrink">
              Add a Drink
            </Link>
          </Nav>
          <Nav>
            <Link style={{color: "white", textDecoration: "none", marginRight: 10}} to="/login">Login</Link>

            <Link style={{color: "white", textDecoration: "none", marginRight: 10}} to="/signup">Sign Up</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
