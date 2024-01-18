import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import "@react-pdf-viewer/core/lib/styles/index.css";
import '@react-pdf-viewer/core/lib/styles/index.css';
import packageJson from '../../../package.json';
import resumePDF from "../../Assets/AbhishekN_Resume.pdf";
import "../Resume/resume.css";
import "../Home/home.css";

function Resume() {
  const [pageNumber, setPageNumber] = useState(1);
  const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];

  return (
    <Container fluid className="resume-section">
      <Container>
        <h1 className="resume-heading font1">
          My <span className="primary-header">Resume</span>
        </h1>
        <p className="resume-description font1">
          Here you can view and download my resume.
        </p>

        {/* Show PDF viewer on all screens */}
        <div className="resume-viewer">
        
          
<Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
<div className="resumecss" >
<Viewer theme='dark' fileUrl={resumePDF}  />
         
        </div>

 
</Worker>
         
           
       
        </div>

        {/* Show download link on all screens */}
        <div className="resume-download text-center">
          <a href={resumePDF} target="_blank" rel="noopener noreferrer" download>
            Download Resume
          </a>
        </div>
      </Container>
    </Container>
  );
}

export default Resume;