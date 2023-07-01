import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../Home/home.css"

function AboutCard() {
  return (
    <Card className="quote-card-view ">
      <Card.Body>
        <blockquote className="blockquote mb-0 font2" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primary-header">Abhishek Nautiyal</span> from Dehradun, India. I am a pre-final student currently pursuing B.Tech at NIT Hamirpur.
            <br />
            <br />
            In addition to exploring tech world, here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing basketball and Table-Tennis
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Reading Books
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Cycling
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Traveling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
