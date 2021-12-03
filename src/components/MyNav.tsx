import React, { useEffect, useState } from "react";
import { Badge, Col, Row, Button, Navbar, Container } from "react-bootstrap";
import LangText from "./LangText";
import AboutMe from "./AboutMe";

function Nav(props: any) {
  return (
    <Navbar className="bg-dark-primary py-0 px-2">
      <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
