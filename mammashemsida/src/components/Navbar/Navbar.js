import React from 'react';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import {Nav, Form, FormControl, Button} from "react-bootstrap"

export const NavBar = () => {
    return (
      <div className="wrapper">
        <Navbar bg="light" expand="lg">
  <Navbar.Brand>HK Redovisning</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Hem</Nav.Link>
      <Nav.Link href="tjanster">Tjänster</Nav.Link>
      <Nav.Link href="om hk-redovisning">Om HK Redovisning</Nav.Link>
      <Nav.Link href="referenser-omdomen">Referenser & Omdömen</Nav.Link>
    </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Sök" className="mr-sm-2" />
                <Button variant="outline-success">Sök</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }