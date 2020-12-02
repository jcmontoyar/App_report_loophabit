import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/nav";
import Image from 'react-bootstrap/Image'
import logo from "../NavBar/logo.png";
import "./Footer.css"

const items = [
    "Performance",
    "Eventual connectivity",
    "Caching",
    "Multi - threading",
    "Memory management",
    "Micro - optimizations",
    "Security",
  ];

export default function Footer({ activeItem, setActiveItem }) {
  return (
    <div className="footer">
      <Navbar expand="lg"  variant="dark" className="colorHeader">
        <Navbar.Brand href="/home">
          <Image
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top imagencita"
            alt="React Bootstrap logo"
            roundedCircle
          />
          Loop Habit Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto navBar"></Nav>
          <Nav className="navBar">
            {items.map((item) => navItem(item, activeItem))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}


function navItem(nombreItem, activeItem) {
    return (
   
        <Nav.Item key={"nav"+nombreItem}>
         {nombreItem}
        </Nav.Item>
   
    );
  }