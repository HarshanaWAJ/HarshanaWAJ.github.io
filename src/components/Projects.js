import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import lmsProject from "../assets/img/LMS-Img.jpg";
import gameApp from "../assets/img/game-app.jpg";
import smsSystem from "../assets/img/Sms-system.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Library Management System",
      description: "Design & Development",
      imgUrl: lmsProject,
    },
    {
      title: "Tic Tac Toe Game",
      description: "Design & Development",
      imgUrl: gameApp,
    },
    {
      title: "School Management System",
      description: "Design & Development",
      imgUrl: smsSystem,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                The following projects use examples of my work from actual projects to show off my abilities and experience.
                There are links to code repositories and a brief description of each project. 
                They use a variety of technologies, deal with real-world issues, and exhibit my skillful project management.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Other projects will be updated soon!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Other projects will be updated soon!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right " src={colorSharp2} alt="background-decoration"></img>
    </section>
  )
}
