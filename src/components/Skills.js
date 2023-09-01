import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills">
      <div className="skills-container">
        <div className="title-container">
          <p className="title-component">SKILLS</p>
        </div>
        <div className="skills-icon-background">
          <div className="skills-icon-container">
            <div className="skills-icons1" align="center">
              <p className="skills-title">Languages:</p>
              <br />
              <br />
              <img src="/skills/js.png" width={40} alt="js" /> &nbsp;
              <img src="/skills/html.png" width={35} alt="html" /> &nbsp;
              <br />
              <img src="/skills/css.png" width={40} alt="css" /> &nbsp;
              <img src="/skills/ruby2.png" width={40} alt="ruby" /> &nbsp;
            </div>
            <div className="skills-icons2" align="center">
              <p className="skills-title">Frameworks & Libraries:</p>
              <br />
              <br />
              <img src="/skills/react2.png" width={40} alt="react" /> &nbsp;
              <img src="/skills/next.png" width={40} alt="next" /> &nbsp;
              <br />
              <img src="/skills/node2.png" width={40} alt="node" /> &nbsp;
              <img src="/skills/axios.png" width={40} alt="axios" /> &nbsp;
              <br />
              <img src="/skills/rails.png" width={40} alt="rails" /> &nbsp;
              <img src="/skills/express.png" width={40} alt="express" /> &nbsp;
              <br />
              <img src="/skills/ejs.png" width={40} alt="ejs" /> &nbsp;
              <img src="/skills/sass2.png" width={40} alt="sass" /> &nbsp;
              <br />
              <img src="/skills/bootstrap.png" width={40} alt="bootstrap" /> &nbsp;
              <img src="/skills/jquery.png" width={40} alt="jquery" /> &nbsp;
            </div>
            <div className="skills-icons3" align="center">
              <p className="skills-title">Systems & Databases</p>
              <br />
              <br />
              <img src="/skills/postgresql2.png" width={40} alt="postgresql" /> &nbsp;
              <img src="/skills/git.png" width={40} alt="git" /> &nbsp;
              <br />
              <img src="/skills/sql.png" width={40} alt="sql" /> &nbsp;
              <br />
            </div>
            <div className="skills-icons4" align="center">
              <p className="skills-title">Testing</p>
              <br />
              <br />
              <img src="/skills/jest2.png" width={40} alt="jest" /> &nbsp;
              <img src="/skills/storybook.png" width={40} alt="storybook" /> &nbsp;
              <br />
              <img src="/skills/cypress.png" width={40} alt="cypress" /> &nbsp;
              <img src="/skills/rspec.png" width={40} alt="rspec" /> &nbsp;
              <br />
              <img src="/skills/mocha.png" width={40} alt="mocha" /> &nbsp;
              <img src="/skills/chai.png" width={40} alt="chai" /> &nbsp;
              <br />
              <br />
            </div>
            <div className="skills-icons5" align="center">
              <p className="skills-title">Cloud Deployment</p>
              <br />
              <br />
              <img src="/skills/vercel.svg" width={45} alt="vercel" />
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Skills;
