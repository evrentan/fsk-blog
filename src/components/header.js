//import { Link } from "gatsby";
import React from "react";
//import Contact from "../pages/Contact"

//style={{textDecoration: 'none', textAlign: 'center', marginLeft: '18px', marginRight: '18px'}}
// style={{textDecoration: 'none', textAlign: 'center'}}
const Header = () => {
  return (

    <div className="container mt-5">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="/AboutMe" className="nav-link">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a href="/Education" className="nav-link">
            Education
          </a>
        </li>
        <li className="nav-item">
          <a href="/Experience" className="nav-link">
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a href="/Contact" className="nav-link">
            Contact
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Header;
