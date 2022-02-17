import { Link } from "gatsby";
import React from "react";
//import Contact from "../pages/Contact"


const Header = ({ siteTitle, siteDescription }) => {
  return (

    <div className="container mt-5">
      <ul className="nav justify-content-center">
        <li className="nav-item mr-10">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="nav-item mr-10">
          <Link to="/blog">
            Blog
          </Link>
        </li>
        <li className="nav-item mr-10">
          <Link to="/Contact">
            Contact
          </Link>
        </li>

        <li className="nav-item mr-10">
          <Link to="/AboutMe">
            About Me
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Header;
