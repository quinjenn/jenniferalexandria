import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className='about-page'>
        <div className="title-container">
          <p className='title-component'>ABOUT ME</p>
        </div>
        <img className="bio-image" src='/images/JQ1.png'
          alt="jalexandria"
          width="36%"
        />
        <div className='bio-text-container'><p className='bio-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
