// import { Link } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from "./MobileMenu";
import { useState } from "react";


interface HeaderProps {
  links: { to: string; label: string }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {

  const location = useLocation();
  
  // State to manage the className
  const [hasClassName, setHasClassName] = useState(false);

  // Determine the className based on the state
  const dynamicClassName = hasClassName ? "open" : "close";

  // Function to handle the click event and add/remove the className
  function handleOpenMobileMenu() {
    setHasClassName((prevHasClassName) => !prevHasClassName);
  }



  return (
    <header>
      <nav id="main-menu">
        <ul>
          <RxHamburgerMenu
            className="hamburger"
            onClick={handleOpenMobileMenu}
          />
          <div className="logo">
            <Link to="/">Mark <span>McLachlan</span></Link>
          </div>
          <div className="page-links">
            {links.map((link) => (
              <li
                key={link.to}
                className={location.pathname === link.to ? "active" : ""}
              >
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link
                className="linkedin-icon"
                to="http://www.linkedin.com/in/mark-mclachlan-a1a3282ab"
              >
                <FaLinkedin className="icon" />
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      <MobileMenu status={dynamicClassName} setHasClassName={setHasClassName} links={links} />
    </header>
  );
};

export default Header;
