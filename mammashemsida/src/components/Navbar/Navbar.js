import React from 'react';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from "react-bootstrap";
import hklogo from '../images/hklogo.png'

export const NavBar = () => {
    return (
      <div className="site-header">
        <Navbar expand="lg" className = "bar">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
            <Navbar.Brand>
            <a href = "/">
              <img className = "logo" src = {hklogo} alt = "hem">
              </img>
            </a>
          </Navbar.Brand>
          <div class="d-flex align-content-center flex-wrap">
              <Nav.Link className = "link" href="/">Hem</Nav.Link>
              <Nav.Link className = "link" href="tjanster">Tjänster</Nav.Link>
              <Nav.Link className = "link" href="om-hk-redovisning">Om HK Redovisning</Nav.Link>
              <Nav.Link className = "link" href="referenser-omdomen">Referenser & Omdömen</Nav.Link>
            </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }