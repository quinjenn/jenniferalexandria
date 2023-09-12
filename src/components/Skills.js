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
              <div className="skills-title">Languages</div>
              <div className="skills-icon-wrapper">
                <img src="/skills/js.png" alt="js" className="icon" />
                <img src="/skills/html.png" alt="html" className="icon" />
                <br />
                <img src="/skills/css.png" alt="css" className="icon" />
                <img src="/skills/ruby2.png" alt="ruby" className="icon" />
              </div>
            </div>


            <div className="skills-icons2" align="center">
              <div className="skills-title">Frameworks & Libraries</div>
              <div className="skills-icon-wrapper">
                <img src="/skills/react2.png" alt="react" className="icon" />
                <img src="/skills/next.png" alt="next" className="icon" />
                <br />
                <img src="/skills/node2.png" alt="node" className="icon" />
                <img src="/skills/axios.png" alt="axios" className="icon" />
                <br />
                <img src="/skills/rails.png" alt="rails" className="icon" />
                <img src="/skills/express.png" alt="express" className="icon" />
                <br />
                <img src="/skills/ejs.png" alt="ejs" className="icon" />
                <img src="/skills/sass2.png" alt="sass" className="icon" />
                <br />
                <img src="/skills/bootstrap.png" alt="bootstrap" className="icon" />
                <img src="/skills/jquery.png" alt="jquery" className="icon" />
              </div>
            </div>


            <div className="skills-icons3" align="center">
              <div className="skills-title">Systems & Databases</div>
              <div className="skills-icon-wrapper">
                <img src="/skills/postgresql2.png" alt="postgresql" className="icon" />
                <img src="/skills/git.png" alt="git" className="icon" />
                <br />
                <img src="/skills/sql.png" alt="sql" className="icon" />
                <br />
              </div>
            </div>


            <div className="skills-icons4" align="center">
              <div className="skills-title">Testing</div>
              <div className="skills-icon-wrapper">
                <img src="/skills/jest2.png" alt="jest" className="icon" />
                <img src="/skills/storybook.png" alt="storybook" className="icon" />
                <br />
                <img src="/skills/cypress.png" alt="cypress" className="icon" />
                <img src="/skills/rspec.png" alt="rspec" className="icon" />
                <br />
                <img src="/skills/mocha.png" alt="mocha" className="icon" />
                <img src="/skills/chai.png" alt="chai" className="icon" />
                <br />
              </div>
            </div>


            <div className="skills-icons5" align="center">
              <div className="skills-title">Cloud Deployment</div>
              <div className="skills-icon-wrapper">
                <img src="/skills/vercel.svg" alt="vercel" className="icon" />
              </div>
            </div>


          </div>
        </div>
      </div >
    </div >
  );
};

export default Skills;
