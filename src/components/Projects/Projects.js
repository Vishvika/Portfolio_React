import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat_app from "../../Assets/Projects/chat_app.png";
import bankist from "../../Assets/Projects/BankistApp.png";
import numGame from "../../Assets/Projects/NumberGame1.png";
import news from "../../Assets/Projects/News_website.png";
import old_portfolio from "../../Assets/Projects/portfolio_old.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat_app}
              isBlog={false}
              title="MyChatApp"
              description="A real-time messaging platform that enables users to send messages, share multimedia, and manage group chats. It uses React.js for the frontend, Node.js and Express.js for the backend, Socket.io for real-time communication, MongoDB for data storage, and JWT for authentication. The app ensures a seamless, responsive user experience."
              ghLink="https://github.com/Vishvika/myChatApp"
              demoLink="https://mychatapp-0qgt.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat_app}
              isBlog={false}
              title="Blog App"
              description="A platform for users to read, write, and manage blog posts. The app features user authentication, the ability to create, update, and delete posts, and a clean, responsive design. Built with React for the frontend and MySQL for the backend, it offers a smooth and interactive blogging experience."
              ghLink="https://github.com/Vishvika/BlogReduxProject"
              demoLink="https://blog-redux-project.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bankist}
              isBlog={false}
              title="The Bankist App"
              description="It's a comprehensive banking application made using JavaScript that handles user authentication, account transactions, and UI updates."
              ghLink="https://github.com/Vishvika/BankistApp"
              demoLink="https://vishvika.github.io/BankistApp/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={old_portfolio}
              isBlog={false}
              title="Old Portfolio"
              description="This eye-catching website was my previous personal portfolio, made using HTML, CSS, and Javascript."
              ghLink="https://github.com/Vishvika/Portfolio"
              demoLink="https://vishvika.github.io/Portfolio/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={numGame}
              isBlog={false}
              title="Number Game"
              description="Demonstrated proficiency in JavaScript programming, including functions for score incrementation, hit number generation, bubble panel creation, and timer management, showcasing problem-solving skills and an ability to create engaging user experiences."
              ghLink="https://github.com/Vishvika/NumberGame"
              demoLink="https://vishvika.github.io/NumberGame/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News Website"
              description="A News website which gives latest news about India. This website Build using Plain Venila Javascript. Also it use Fatch API"
              ghLink="https://github.com/Vishvika/News-Website-"
              demoLink="https://vishvika.github.io/News-Website-/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
