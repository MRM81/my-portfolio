import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container flex-center-column">
      <Link
        className="linkedin-icon"
        to="http://www.linkedin.com/in/mark-mclachlan-a1a3282ab"
      >
        <FaLinkedin className="icon" />
      </Link>
      <h6>&copy; Copyright 2024 Mark McLachlan</h6>
    </div>
  );
};

export default Footer;
