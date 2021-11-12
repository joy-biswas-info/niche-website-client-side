import React, { useState } from "react";
import { Container, Image, Nav, Navbar, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
        style={{ zIndex: "4" }}
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
                <div>
                  <Button variant="worning" onClick={logOut}>
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
