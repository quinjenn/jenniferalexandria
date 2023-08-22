import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className='about-page'>
        <div className="title-container">
          <p className='title-component'>ABOUT ME</p>
        </div>
        <img src='/images/JQ1.png'
          alt="jalexandria"
          width="36%"
        />
        <p>I'm a full-stack web developer experienced in operations and experiential marketing..</p>
      </div>
    </div>
  );
};

export default About;
