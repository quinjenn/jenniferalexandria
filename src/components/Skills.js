import React from 'react';
import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills">
      <div className='skills-container'>
        <div className="title-container">
          <p className='title-component'>Skills</p>
        </div>
        <div className='skills-icon-container'>
          <div className="skills-icons1" align="center">
            Languages: JavaScript, HTML5, CSS3, SQL, Ruby
          </div>
          <div className="skills-icons2" align="center">
            Responsive/Frameworks & Libraries: NodeJS, React, Next.js, Axios, Express, EJS, jQuery, Bootstrap, Rails, Sass
          </div>
          <div className="skills-icons3" align="center">
            Systems & Databases: PostgreSQL, Git
          </div>
          <div className="skills-icons4" align="center">
            Testing: Jest, Storybook, Cypress, RSpec, Mocha, Chai
          </div>
          <div className="skills-icons5" align="center">
            Cloud Deployment Platforms: Vercel
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
