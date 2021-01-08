import React from 'react';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import {Nav, Form, FormControl, Button} from "react-bootstrap"

export const NavBar = () => {
    return (
      <div className="wrapper">
        <Navbar bg="light" expand="lg" className = "bar">
          <Navbar.Brand>HK Redovisning</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className = "mx-auto" href="/">Hem</Nav.Link>
              <Nav.Link className = "mx-auto" href="tjanster">Tjänster</Nav.Link>
              <Nav.Link className = "mx-auto" href="om hk-redovisning">Om HK Redovisning</Nav.Link>
              <Nav.Link className = "mx-auto" href="referenser-omdomen">Referenser & Omdömen</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }