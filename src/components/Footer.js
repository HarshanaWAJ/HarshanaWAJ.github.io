import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/MyLogo-removebg-preview.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer expanded-footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/HarshanaWAJ"><img src={navIcon4} alt="github" /></a>
                &nbsp;&nbsp;&nbsp;&nbsp; 
              <a href="https://github.com/HarshanaWAJ"><img src={navIcon1} alt="linkedin" /></a>
                &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/HarshanaWAJ"><img src={navIcon2} alt="facebook" /></a>
                &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/HarshanaWAJ"><img src={navIcon3} alt="instagram" /></a>
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <p className="copyRight">&copy; Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
