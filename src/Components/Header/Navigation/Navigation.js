import React from "react";
import { Container,Nav, Navbar, Button } from "react-bootstrap";
import { Link} from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        className="fw-bold"
        style={{ zIndex: "4",backgroundImage:"url('./image/slider1.jpg')"}}
      >
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img src="./logo.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              {user.email && (
                <Nav.Link as={Link} to={"/dashboard"}>
                  Dashboard
                </Nav.Link>
              )}
              {user.email ? (
                <div style={{backgroundColor:'red',paddingRight:"10px",borderRadius:'5px'}}>
                  <Button variant="warning" onClick={logOut}>
                    Log Out
                  </Button>{" "}
                  {user?.displayName}
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
    </>
  );
};

export default Navigation;
