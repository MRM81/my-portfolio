import Project from "../components/Project";
import { useState, useEffect } from "react";
import RecentWork from "../components/RecentWork";
import BackToTop
 from "../components/BackToTop";
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
      <BackToTop />
      <div className="project-content">
        <RecentWork />
      </div>
    </section>
  );
};

export default Projects;
