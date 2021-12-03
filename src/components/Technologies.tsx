import React, { useEffect, useState } from "react";
import {
  Badge,
  Col,
  Row,
  Button,
  Navbar,
  Container,
  Image,
} from "react-bootstrap";
import aboutMeImg from "../media/me.jpg";
import LangText from "./LangText";

function Technologies(props: any) {
  return (
    <Row className="technologies-bg">
      <Col>
        <Row data-aos="fade-right" className="h-100vh py-5">
          <Col sm={7} className="offset-sm-1">
            <LangText
              className="display-4 fw-bold text-light pb-5"
              en="Technologies I've been working with:"
              pt="Eu tenho trabalhado com estas tecnologias:"
            />

            <div className="display-6 text-light fw-bold">
              <div>JavaScript ES6</div>
              <div>TypeScript</div>
              <div>React.js</div>
              <div>Bootstrap</div>
              <div>Sass</div>
              <div>Recharts</div>
              <div>JSON</div>
            </div>
          </Col>
        </Row>

        <Row data-aos="fade-right" className="h-100vh py-5">
          <Col sm={7} className="offset-sm-1">
            <LangText
              className="display-4 fw-bold text-light pb-5"
              en="...but I also know these technologies/skills:"
              pt="...mas eu também sei essas tecnologias/skills:"
            />

            <div className="display-6 text-light fw-bold">
              <div>Java</div>
              <div>Python</div>
              <div>MySQL</div>
              <div>Image edition</div>
              <div>Figma (design)</div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Technologies;
