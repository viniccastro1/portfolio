import React, {
  FunctionComponent,
  ReactComponentElement,
  useEffect,
  useState,
} from "react";
import {
  Badge,
  Col,
  Row,
  Button,
  Navbar,
  Container,
  Image,
  Collapse,
} from "react-bootstrap";
import aboutMeImg from "../media/me.jpg";
import mockingText from "../media/mocking_text.png";
import MyVideo from "../media/myVideo.mp4";
import ProjBf from "../media/proj_bodyfat.mp4";
import LangText from "./LangText";
import "../custom.d.ts";
import { showMoreBtnAnim, HoverOptions } from "../animations/animations";
import { couldStartTrivia } from "typescript";

interface ProjectProps {
  collapseId: string;
  title: JSX.Element | string;
  text: JSX.Element;
  thumb: any;
  video: any;
}

interface ShowMoreBtnProps {
  onClick: any;
  open?: any;
}

function ShowMoreBtn(props: ShowMoreBtnProps) {
  const text = (): string => {
    if (props.open === true) {
      return "Show less";
    } else {
      return "Show more";
    }
  };

  return (
    <Button
      className="w-100 show-more-btn fs-3 py-0"
      variant="light"
      onMouseEnter={(e) => {
        showMoreBtnAnim(HoverOptions.MouseIn, e.target);
      }}
      onMouseLeave={(e) => {
        showMoreBtnAnim(HoverOptions.MouseOut, e.target);
      }}
      onClick={props.onClick}
    >
      {text()}
    </Button>
  );
}

function Project(props: ProjectProps) {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };

  function Video(props: any) {
    useEffect(() => {
      const collapseEl = document.getElementById(
        props.collapseId
      ) as HTMLElement;
      collapseEl.scrollIntoView();
      console.log(collapseEl);
    });

    return (
      <Row className="bg-light" id={props.collapseId}>
        <video width="320" height="240" controls>
          <source src={props.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Row>
    );
  }

  return (
    <>
      <Row className="justify-content-center pb-2 pt-5 mb-3 text-light my-bg-gradient">
        <Col lg={8}>
          <Row className="mb-3">
            <Col sm={3} className="d-flex align-items-center">
              <Image src={props.thumb} fluid className="circle-mask"></Image>
            </Col>
            <Col sm={9}>
              <p className="fw-bold fs-1">{props.title}</p>
              <p className="fs-4">{props.text}</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <ShowMoreBtn onClick={onClick} open={open} />
            </Col>
          </Row>
        </Col>
      </Row>

      <Collapse in={open}>
        <Row className="bg-light" id={props.collapseId}>
          <Video video={props.video} collapseId={props.collapseId}></Video>
        </Row>
      </Collapse>
    </>
  );
}

function Projects(props: any) {
  return (
    <Row>
      <Col>
        <Row>
          <LangText
            className="fs-2 fw-bold text-primary text-center pb-3 my-5 text-decoration-underline"
            en={"My other projects:"}
            pt={"Meus outros projetos:"}
          />
        </Row>

        <Project
          collapseId="proj1"
          title={"Bodyfat Calculator"}
          text={
            <LangText
              en={
                "Calculates your bodyfat percentagem using measurements like hips, neck and waist."
              }
              pt={
                "Calcula sua quantidade de gordura corporal usando medidas como quadril, pescoço e cintura."
              }
            />
          }
          thumb={aboutMeImg}
          video={ProjBf}
        ></Project>

        <Project
          collapseId="proj1"
          title={"Mocking Text Generator"}
          text={
            <LangText
              en={
                "Fun basic project on React that makes you text ironic alternating the text with capital characters."
              }
              pt={
                "Projeto básico no React que ironiza seu texto alterando o texto com caracteres maiúsculos."
              }
            />
          }
          thumb={mockingText}
          video={MyVideo}
        ></Project>
      </Col>
    </Row>
  );
}

export default Projects;
