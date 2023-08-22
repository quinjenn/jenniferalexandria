import React from 'react';
import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills">
      <div className='skills-container'>
        <div className="title-container">
          <p className='title-component'>Skills</p>
        </div>
        <div className='skills-icon-background'>
          <div className='skills-icon-container'>
            <div className="skills-icons1" align="center">
              Languages:
              <br />
              <br />
              <img src='/skills/js.png' width={40} />
              <br />
              <img src='/skills/html.png' width={40} />
              <br />
              <img src='/skills/css.png' width={45} />
              <br />
              <img src='/skills/ruby2.png' width={45} />
            </div>
            <div className="skills-icons2" align="center">
              <img src='/skills/react2.png' width={40} />
              <br />
              <img src='/skills/next.png' width={40} />
              <br />
              <img src='/skills/node2.png' width={40} />
              <br />
              <img src='/skills/axios.png' width={40} />
              <br />
              <img src='/skills/rails.png' width={40} />
              <br />
              <img src='/skills/express.png' width={40} />
              <br />
              <img src='/skills/ejs.png' width={40} />
              <br />
              <img src='/skills/sass2.png' width={40} />
              <br />
              <img src='/skills/bootstrap.png' width={40} />
              <br />
              <img src='/skills/jquery.png' width={40} />
              <br />
              <br />
              Responsive/Frameworks & Libraries:
            </div>
            <div className="skills-icons3" align="center">
              Systems & Databases
              <br />
              <br />
              <img src='/skills/postgresql2.png' width={40} />
              <br />
              <img src='/skills/git.png' width={40} />
              <br />
              <img src='/skills/sql.png' width={40} />
              <br />
            </div>
            <div className="skills-icons4" align="center">
              <br />
              <br />
              <img src='/skills/jest2.png' width={40} />
              <br />
              <img src='/skills/storybook.png' width={40} />
              <br />
              <img src='/skills/cypress.png' width={40} />
              <br />
              <img src='/skills/rspec.png' width={40} />
              <br />
              <img src='/skills/mocha.png' width={40} />
              <br />
              <img src='/skills/chai.png' width={40} />
              <br />
              <br />
              Testing

            </div>
            <div className="skills-icons5" align="center">
              Cloud Deployment
              <br />
              <br />
              <img src='/skills/vercel.svg' width={45} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
