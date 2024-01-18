import React from "react";
import LazyLoad from 'react-lazy-load';
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import techno from "../../Assets/Projects/technotweets.png"
import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Carhub from "../../Assets/Projects/carshowcase.png";
import Company from "../../Assets/Projects/company69.png";
import Todo from "../../Assets/Projects/todo.png";
import Expense from "../../Assets/Projects/expense.png";
import Tictac from "../../Assets/Projects/tictac.png";
import Youare from "../../Assets/Projects/youarenotalone.png";
import Recipe from "../../Assets/Projects/recipeapp.png";
import mern from "../../Assets/Projects/auth.png";
import Buisness from "../../Assets/Projects/buisness.png";
import coursify from "../../Assets/Projects/coursify.png"
import udemo from "../../Assets/Projects/udemo.png"


import "../Home/home.css"

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading font1">
          My Recent <strong className="Fluorescent-Blue primary-header">Works </strong>
        </h1>
        <p className="font1">Here are a few <span className="primary-header">projects</span> I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} lg={4} className="project-card">
            <ProjectCard
            
              imgPath={udemo}
              title="Udemo"
              description="This is a ultimate video course sharing platform like udemy having free and premium course, made with Next.js and authenticated using Supabase"
              ghLink="https://github.com/Abhisays27/Udemo"
              demoLink="https://udemo-ogm4j4izs-abhisays27.vercel.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={coursify}
              title="Coursify Connect"
              description=" A portal used for Hiring software engineers, Product Managers, Data Scientist etc "
              ghLink="https://github.com/Abhisays27/CoursifyConnect"
              demoLink="https://coursify-connect.vercel.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={techno}
              title="Techno Tweets"
              description="This website is a thought-sharing platform featuring a Google-authenticated signin and logout function, as well as various features such as an edit and searchbar built with Next.js and mongoDB "
              ghLink="https://github.com/Abhisays27/TechnoTweets"
              demoLink="https://technotweets.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/Abhisays27/New-Personal-Portfolio"
              demoLink="abhisheknautiyal.vercel.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Carhub}
              title="Car Hub"
              description="A car rental website with a combobox and filter section that uses Google authentication and a Rapid API made with Next js and Typescript."
              ghLink="https://github.com/Abhisays27/Carshowcase-App"
              
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Expense}
              title="Expense App"
              description="An online expense tracker using React. It allows you to keep track of your expenses and savings. "
              ghLink="https://github.com/Abhisays27/Expense-React-App"
              demoLink="https://abhisays27.github.io/Expense-React-App/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Youare}
              title="You Are Not Alone"
              description="This website allows users to share and learn about other people's mental health experiences and solutions. It also has a chatbot that allows customers to have anonymous real-time conversations. "
              ghLink="https://github.com/Abhisays27/YouAreNotAloneHere"
              demoLink="https://devfolio.co/projects/you-are-not-alone-2c03"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Buisness}
              title="Business Website"
              description="A stunning single-page business frontend website built with React and Tailwind CSS. "
              ghLink="https://github.com/Abhisays27/React-Buisness-Project"
              demoLink="https://buisnesswebsite.netlify.app/#home"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Recipe}
              title="Recipe App"
              description="A fully JWT-authenticated app that allows you to upload your recipe to your user profile, search for other recipes, and delete them.Built with react, express, and MongoDB. "
              ghLink="https://github.com/Abhisays27/Mern-Recipe-App"
             
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Company}
              title="Grow With Data"
              description="A beautiful single-page frontend website built with React and Tailwind CSS. "
              ghLink="https://github.com/Abhisays27/Company69"
              demoLink="https://vercel.com/abhisays27/company69/CN3tvUtymi5cud1h3RTvobG1ZfHo"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={mern}
              title="MERN Authentication"
              description="A fully authenticated app with signin and login features that uses a cookie parser, password hashing, and JWT tokens made with the MERN stack and Redux "
              ghLink="https://github.com/Abhisays27/MERN-Authentication"
              demoLink="https://mern-authentication-nnnu.onrender.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              title="TODO App"
              description="A web app built with react and firebase to track your daily to-do list. "
              ghLink="https://github.com/Abhisays27/Todo-React-App"
              demoLink="https://todoappabhi.netlify.app/"
            />
          </Col>

         

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Tictac}
              title="Tic-Tac-Toe"
              description="This is a simple online tic tac toe game built with html, CSS, and javascript. "
              ghLink="https://github.com/Abhisays27/Tic-Tac-Toe"
              demoLink="https://abhisays27.github.io/Tic-Tac-Toe/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
