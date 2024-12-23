import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";
import { experiences } from "../../constants/info";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row>
          <Col md={12} className="experience-card">
            <div>
              {experiences.map((experience) => {
                return (
                  <ExperienceCard
                    company={experience.company}
                    role={experience.role}
                    duration={experience.duration}
                    logo={experience.logo}
                    description={experience.description}
                    location={experience.location}
                  />
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
