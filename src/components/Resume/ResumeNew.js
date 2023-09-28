import React from "react";
import { Container } from "react-bootstrap";
import resumePDF from "../../Assets/finalResume.pdf";
import "../Resume/resume.css"

import "../Home/home.css";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Container>
        <h1 className="resume-heading font1">My <span className="primary-header">Resume</span></h1>
        <p className="resume-description font1">
          Here you can view and download my resume.
        </p>
        <div className="resume-viewer">
          <object
            data={resumePDF}
            type="application/pdf"
            width="90%"
            height="1000px"
          >
            <p>
              Your browser does not support embedded PDFs. Please{" "}
              <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                download the PDF
              </a>{" "}
              to view it.
            </p>
          </object>
        </div>
        <div className="resume-download">
          <a href={resumePDF} target="_blank" rel="noopener noreferrer" download>
            Download Resume
          </a>
        </div>
      </Container>
    </Container>
  );
}

export default Resume;