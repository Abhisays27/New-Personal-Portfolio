import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description ">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header font1"> ABOUT </span>  <span className="font1">ME</span>
            </h1>
            <p className="home-about-body font2" data-aos="fade-up">
              <br />
             I'm a final year student persuading Btech in ECE from <span className="primary-header">
               NIT Hamirpur
              </span>{" "}
              who loves solving problems and building Websites.
              <br />
              <br />I am passionate about{" "}
              <span className="primary-header">technologies</span> and love to learn
              new things.
              <br />
              <br />I am more interested in building new
              <span>
                <span className="primary-header"> Web Technologies and Products.</span>
              </span>
              <br />
              <br />I always apply my experience in developing products with{" "}
              <span className="primary-header">Node.Js</span> and Modern Javascript
              Library and Framework like
              <span className="primary-header"> React.Js </span>and  <span className="primary-header">Next.Js</span>
              <br />
              <br />
              Currently expanding my portfolio by building more{" "}
              <span className="primary-header">projects </span> that I can add
              here.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header font1">CONNECT </span > <span className="font1">WITH ME</span>
            </h1>
            <p data-aos="fade-left" className="font1">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/Abhisays27"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Abhishe51444852"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:abhishek.nt94@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abhishek-nautiyal-b06586229/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_abhi_nautiyal27/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
              <a
                
                href="https://leetcode.com/u/1abhishek123/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="leetcode"
              >
               <SiLeetcode />
              </a>
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
