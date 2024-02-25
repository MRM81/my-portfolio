import React from "react";
import { SiMinutemailer } from "react-icons/si";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="intro-content flex-left-column">
        <h4>Bachelor of IT Graduate</h4>
        <h1>
          Hi! I'm a recent IT graduate with a passion for web Development!{" "}
        </h1>
        <h5>
          My mission is to gain employment as a front or backend web developer!
          I have developed strong skills in Java, JavaScript, React and ASP.net along with AWS Integration.
        </h5>

        <a href="/contact">
          <button>
            Contact me 
            <span>
              <SiMinutemailer />
            </span>
          </button>
        </a>
      </div>

      <div className="intro-image">
        <img className="react-icon" src="react-icon.png" alt="" />
        <img className="asp-icon" src="asp-icon.png" alt="" />
        <div className="image"></div>
      </div>
    </div>
  );
};

export default Introduction;
