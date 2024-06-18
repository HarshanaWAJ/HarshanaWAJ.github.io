import javaLogo from "../assets/img/java-logo.png";
import springLogo from "../assets/img/spring-boot-logo.png";
import reactLogo from "../assets/img/React_logo_logotype_emblem (1).png";
import mysqlLogo from "../assets/img/pngimg.com - mysql_PNG29.png";
import mongoLogo from "../assets/img/logo-mongodb-png-mongodb-1600.png";
import jsLogo from "../assets/img/javascript-logo-big.png";
import nodeLogo from "../assets/img/nodejs.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Languaged and Frameworks</h2>
                        <p>
                          The following projects use examples of my work from actual projects to show off my abilities and experience.
                          There are links to code repositories and a brief description of each project. 
                          They use a variety of technologies, deal with real-world issues, and exhibit my skillful project management.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={javaLogo} alt="java" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={springLogo} alt="spring" />
                                <h5>Spring-Boot</h5>
                            </div>
                            <div className="item">
                                <img src={reactLogo} alt="react" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={mysqlLogo} alt="SQl Databases" />
                                <h5>SQL Databases</h5>
                            </div>
                            <div className="item">
                                <img src={mongoLogo} alt="MongoDB" />
                                <h5>NoSQL Database</h5>
                            </div>
                            <div className="item">
                                <img src={jsLogo} alt="JS" />
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <img src={nodeLogo} alt="Node JS" />
                                <h5>Node JS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
  )
}
