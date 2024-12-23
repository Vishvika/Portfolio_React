import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import dp from "../../Assets/dpp.png";
import Particle from "../Particle";
import Type from "./Type";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Vishvika Shukla</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={dp}
                alt="home pic"
                className="header__img"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <Experience />
      <Projects />
    </section>
  );
}

export default Home;
