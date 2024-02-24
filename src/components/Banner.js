import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import bgImg from '../assets/img/bg-img-astronaut.png';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Undergraduate","Software Engineer", "Full Stack Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      console.log(index);
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  //
  const handleClick = () => {
    window.location.href = '#connect';
  };


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm`} 
                <h1>{`Janith Harshana`}</h1>
                
                <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Undergraduate","Software Engineer", "Full Stack Developper" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                  I'm Janith Harshana, a dedicated Software Engineer and Developer currently pursuing a BSc (Hons) in Information Technology at SLIIT. 
                  Passionate about coding, I've been actively involved in the development side since 2022. With a solid foundation in IT, I bring creativity and problem-solving skills to every project, ensuring innovative and robust software solutions.
                  Let's connect and explore the possibilities of the ever-evolving tech landscape.
                  </p>
                  <button onClick={handleClick}>
                    Get in Touch <ArrowRightCircle size={25} />
                  </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={bgImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
