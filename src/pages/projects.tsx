import Project from "../components/Project";
import { useState, useEffect } from "react";

const Projects = () => {
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
    <section className="page-container">
      <div className="projects-container">
        {projects.map((project: any) => (
          <div key={project.id}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
