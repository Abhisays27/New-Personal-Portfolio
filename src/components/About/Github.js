import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const [showLastHalfYear, setShowLastHalfYear] = useState(false);
  const [statsHeight, setStatsHeight] = useState(180);


  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter(activity => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setShowLastHalfYear(window.matchMedia("(max-width: 768px)").matches);
      const windowWidth = window.innerWidth;
      if (windowWidth <= 768) { // Adjust the breakpoint to fit your needs
        setStatsHeight(130); // Set the desired height for smaller screens
      } else {
        setStatsHeight(170); // Default height for larger screens
      }
     
    };

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 style={{ paddingBottom: "20px" }} data-aos="fade-right">
        How much <span className="primary-header">Code</span> I Write
      </h1>
      <div className="gitContainer" data-aos="fade-up">
        <GitHubCalendar
          username="Abhisays27"
          color="#1872B6"
          blockSize={13}
          blockMargin={7}
          fontSize={18}
          transformData={showLastHalfYear ? selectLastHalfYear : undefined}
          hideColorLegend
          hideTotalCount
        />
      </div>

      <div className="gitStats">
      <img 
      src={`https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=Abhisays27&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=dracula&locale=en&hide_border=false&order=1`}
          style={{ height: statsHeight }} // Dynamically set the height
          alt="stats graph"
           
          />
      </div>
    </Row>
  );
}

export default Github;
