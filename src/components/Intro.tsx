import React, { useEffect, useState } from "react";
import { Badge, Col, Row, Button } from "react-bootstrap";
import introPic from "../media/me_circle.png";
import LangText from "./LangText";
import { learnMoreBtnAnim, HoverOptions } from "../animations/animations";

function Intro(props: any) {
  const scrollToAboutMe = () => {
    const element = document.getElementById("aboutMeSection") as HTMLElement;

    element.scrollIntoView();
  };

  return (
    <>
      <Row className="h-100vh section">
        <Col className="introBanner p-0 bg-primary">
          <div className="w-25em mx-auto introContent" data-aos="fade-right">
            <Row>
              <img src={introPic} className="introPic mx-auto mb-3"></img>
            </Row>
            <Row className="mb-3">
              <h1 className="fw-bold display-5 text-center lh-1 m-0 text-stroke">
                Vinicius de Castro
              </h1>
              <h2 className="text-secondary display-7 text-center lh-1 text-stroke">
                Web developer
              </h2>
            </Row>
            <Row>
              <LangText
                className="fs-4 text-center text-stroke"
                en={
                  <p>
                    <span className="fw-bold text-primary ">
                      Front-end developer
                    </span>{" "}
                    who loves to create interfaces and work with logic. I have
                    been developing websites and softwares for about two years.
                  </p>
                }
                pt={
                  <p>
                    <span className="fw-bold text-primary">
                      Desenvolvedor front-end
                    </span>{" "}
                    que ama criar interfaces e trabalhar com lógica. Tenho
                    desenvolvido programas e sites por dois anos.
                  </p>
                }
              />
            </Row>

            <Row>
              <span>
                <Button
                  onMouseEnter={() => learnMoreBtnAnim(HoverOptions.MouseIn)}
                  onMouseLeave={() => learnMoreBtnAnim(HoverOptions.MouseOut)}
                  onClick={() => scrollToAboutMe()}
                  variant="white"
                  className="learn-more-btn d-flex mx-auto"
                >
                  <span className="fw-bold fs-4">
                    <LangText en={"Learn more"} pt={"Veja mais"} />
                  </span>
                  <span className="mx-2 lm-btn-darrow" />
                </Button>
              </span>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Intro;
