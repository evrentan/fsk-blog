import React from "react";
import Contact from "./contact";

const Header = ({ siteTitle, siteDescription }) => {
  return (

    <div className="container mt-5">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a href="/" className="nav-link ">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link ">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link ">
            <Contact />
          </a>
        </li>

        <li className="nav-item">
          <a href="/" className="nav-link ">
            About us
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Header;
