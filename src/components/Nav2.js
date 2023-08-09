import React from 'react';
import './Nav2.css';
import { Link } from 'react-scroll';

const Nav2 = () => {
  return (
    <div className="nav-links-container">
      <ul className="nav-titles">
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            SKILLS
          </Link>
        </li>
        <li>
          <a className="resume-link" href="/Jennifer_Quintal_Developer_Resume_.pdf" target="_blank" download>RESUME</a>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div >
  );
};

export default Nav2;


