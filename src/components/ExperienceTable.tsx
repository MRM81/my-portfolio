import React from "react";
import { FaCheck } from "react-icons/fa";

const ExperienceTable = () => {
  return (
    <div className="experience-content">
      <div className="content-heading">
        <h1>Experience in fullstack web design and development</h1>
      </div>

      <div className="content-text">
        <div className="text">
          <div className="item">
            <span>
              <FaCheck />
            </span>
            Proficient in React.js & Next.js with experience in state
            management, SSR, component lifecycle, hooks, and performance
            optimization.
          </div>
          <div className="item">
            <span>
              <FaCheck />
            </span>
            Exceptional ASP.NET skills enable robust web development, efficient
            backend operations, seamless integration, and scalable applications.
          </div>
          <div className="item">
            <span>
              <FaCheck />
            </span>
            Proficient in Java OOP concepts, adept at moderate-level
            implementation and problem-solving.
          </div>
          <div className="item">
            <span>
              <FaCheck />
            </span>
            Experience in GitHub source control, demonstrating strong teamwork
            skills, fostering collaboration, and ensuring efficient project
            management.
          </div>
        </div>

        <div className="text">
          <div className="item">
            <span>
              <FaCheck />
            </span>
            Proficient in AWS integration, adept at configuring services,
            troubleshooting, and optimizing performance for moderate-scale
            projects.
          </div>
          <div className="item">
            <span>
              <FaCheck />
            </span>
            Strong database skills encompass SQL and MongoDB, including
            querying, data manipulation, and basic administration tasks.
          </div>
          <div className="item">
            <span>
              <FaCheck />
            </span>
            proficient at utilizing Node.js and Express.js for efficient,
            scalable web development with moderate complexity.
          </div>
          <div className="item">
            <span>
              <FaCheck />
            </span>
            Proficient in Docker basics, building and managing containers, and
            deploying applications with moderate proficiency.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTable;
