import React from "react";
import { Container, Image, Nav, Navbar,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Hooks/UseAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="fw-bold">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <h1>Joy Travels </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#spot">
              Spots
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            {user.email && 
              <Nav.Link as={Link} to="/addspot">
                Add-Spot
              </Nav.Link>}
            {user.email && <Nav.Link as={Link} to="/manageorder">
              Manage-Order
            </Nav.Link>}
            {user.email && <Nav.Link as={Link} to={`/myorder/${user.email}`}>My-Order</Nav.Link>}
              {user.email ? (
                <div>
                  <Button variant="danger" onClick={logOut}>
                    Log Out
                  </Button>{" "}
                  {user.displayName}
                </div>
              ) : (
                <Nav.Link as={Link} to="/login">
                  LogIn/Register
                </Nav.Link>
              )}
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
