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
import AOS from "aos";

function AboutMe(props: any) {
  return (
    <Row
      className="h-100vh about-me justify-content-center text-light"
      id="aboutMeSection"
    >
      <Col sm={1}></Col>

      <Col sm={4} className="d-flex justify-content-center p-md-5">
        <Image
          src={aboutMeImg}
          fluid
          className="img-fit-cover w-75 border-radius-1 box-shadow-1"
        ></Image>
      </Col>

      <Col
        sm={5}
        className="align-middle d-flex flex-column justify-content-center order-sm-first"
        data-aos="fade-right"
      >
        <p className="display-4 fw-bold">
          <LangText en="I am Vinicius Castro" pt="Me chamo Vinicius Castro" />
        </p>

        <LangText
          en={
            <p className="display-6">
              I graduated in 2021, at{" "}
              <span className="fw-bold">Unigranrio</span> in{" "}
              <span className="fw-bold">System Analysis and Development.</span>
            </p>
          }
          pt={
            <p className="display-6">
              Me formei em 2021 na <span className="fw-bold">Unigranrio</span>{" "}
              em{" "}
              <span className="fw-bold">
                Análise e Desenvolvimento de Sistemas.
              </span>
            </p>
          }
        />

        <LangText
          en={
            <p className="display-6">
              I built this portfolio with{" "}
              <span className="fw-bold">React, TypeScript, Bootstrap</span> and{" "}
              <span className="fw-bold">Sass</span> to show you what I like to
              do.
            </p>
          }
          pt={
            <p className="display-6">
              Construí esse portfólio com{" "}
              <span className="fw-bold">React, TypeScript, Bootstrap</span> e{" "}
              <span className="fw-bold">Sass</span> para você ver o que gosto de
              fazer
            </p>
          }
        />
      </Col>
    </Row>
  );
}

export default AboutMe;
