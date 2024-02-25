import React, { useEffect, useRef, useState } from "react";

import Project from "./Project";
import ProjectReverse from "./ProjectReverse";

const RecentWork = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("projects.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="recent-work">
      <h1>Recent Work</h1>
      <h6>A collection of my most recent projects</h6>

      {projects.map((project: any, index: any) =>
        index % 2 === 0 ? (
          <div className="project" key={project.id}>
            <Project project={project} order={1} />
          </div>
        ) : (
          <div className="project" key={project.id}>
            <ProjectReverse project={project} order={2} />
          </div>
        )
      )}
    </div>
  );
};

export default RecentWork;
