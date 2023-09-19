import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className='about-page'>
        <div className="title-container-1">
          <p className='title-component'>ABOUT ME</p>
        </div>
        <img className="bio-image" src='/images/JQ1.png'
          alt="jalexandria"
          width="36%"
        />
        <div className='bio-text-container'><p className='bio-text'>
          I'm an innovative Full Stack Developer with a passion for creative problem-solving. With a background in operations and experiential marketing, I am confident about providing aesthetic products and delivering refined solutions that enrich user experiences.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
