import React from 'react';
import { Container, Row } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import mePic from '../assets/img/my-img.jpg';



export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Container className='about-description'>
            <div className='about-description-detailed'>
            <Row>
                <h1>
                    About Me
                </h1>
                <p>
                    Hello, I'm Janith Harshana, currently an undergraduate in my third year pursuing a BSc (Hons) in Information Technology at SLIIT. 
                    As a passionate Software Engineer and Developer,
                    I find joy and purpose in crafting innovative solutions through code.
                </p>
            </Row><Row>
                <h3 className='head-services-des'>
                    I'm Doing,
                </h3>
                <p className='services-des'>UI/UX Designing, Web Application Designing and Development, 
                   Desktop Application Designing and Development, Documentation
                </p>
            </Row>
            <Row>
                <h3>
                    Academic Journey
                </h3>
                    <p>
                    In my academic journey at SLIIT, I've immersed myself in the dynamic world of Information Technology, constantly expanding my knowledge and honing my skills. 
                    The diverse range of courses has provided me with a strong foundation in various aspects of IT, from software development methodologies to cutting-edge technologies.
                    </p>
            </Row>
            </div>
            <div className='about-image-border'>
                <img src={mePic} alt="Description" class="about-image"></img>
            </div>   
        </Container>
        <Row className='connection-navigation'>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/HarshanaWAJ"><img src={navIcon4} alt="" /></a>
                &nbsp;&nbsp;&nbsp;&nbsp; 
              <a href="https://github.com/HarshanaWAJ"><img src={navIcon1} alt="" /></a>
                &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/HarshanaWAJ"><img src={navIcon2} alt="" /></a>
                &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/HarshanaWAJ"><img src={navIcon3} alt="" /></a>
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <Row>
            </Row>
          </span>
        </Row>
      </Container>
    </section>
  );
};
