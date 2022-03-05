//import { Link } from "gatsby";
import React from "react";
//import Contact from "../pages/Contact"

//style={{textDecoration: 'none', textAlign: 'center', marginLeft: '18px', marginRight: '18px'}}
// style={{textDecoration: 'none', textAlign: 'center'}}
const Header = () => {
  return (

    <div className="container mt-5" style={{fontFamily: 'JetBrains Mono', fontSize: '2rem'}}>
      <ul className="nav justify-content-center">
        <li className="nav-item" style={{marginRight: '1rem'}}>
          <a href="/" className="nav-link">
            Blog
          </a>
        </li>
        <li className="nav-item" style={{marginRight: '1rem'}}>
          <a href="/AboutMe" className="nav-link">
            About Me
          </a>
        </li>
        <li className="nav-item" style={{marginRight: '1rem'}}>
          <a href="/Education" className="nav-link">
            Education
          </a>
        </li>
        <li className="nav-item" style={{marginRight: '1rem'}}>
          <a href="/Experience" className="nav-link">
            Experience
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
