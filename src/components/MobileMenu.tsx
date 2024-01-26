// import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

function MobileMenu(props: any) {

  const { setHasClassName } = props;

  // Function to handle the click event and add/remove the className
  function handleCloseMobileMenu() {
    setHasClassName((prevHasClassName: any) => !prevHasClassName);
  }
  return (
    <section className={props.status} id="mobile-menu">
      <nav>
        <i onClick={handleCloseMobileMenu}>
          <IoIosCloseCircleOutline />
        </i>

        <div className="mobile-menu-logo">
          <Link onClick={handleCloseMobileMenu}to="/">Mark McLachlan</Link>
        </div>
        <ul>
          <div className="page-links">
          {props.links.map((link: any) => (
              <li
                key={link.to}
                className={location.pathname === link.to ? "mobile-active" : ""}
              >
                <Link onClick={handleCloseMobileMenu} to={link.to}>{link.label}</Link>
              </li>
            ))}
          </div>

          <li className="linkedin-icon">
            <Link to="http://www.linkedin.com/in/mark-mclachlan-a1a3282ab">
              <FaLinkedin />
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default MobileMenu;
