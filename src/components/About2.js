import React from 'react';
import "./About2.css";

const About2 = () => {
  return (
    <div id="about">
      <div className='about-page'>
        <div className="title-container-1">
          <p className='title-component'>ABOUT ME</p>
        </div>
        <div className='about-me-component'>
          <img className="bio-image" src='/images/JQ1.png'
            alt="jalexandria"
            width="50%"
          />
          <div className='bio-text-container'>
            <p className='bio-line'></p>
            <p className='bio-text'>
              Jennifer is an innovative Full Stack Developer with a flair for creative problem-solving. Drawing from her diverse background in operations and experiential marketing, Jennifer brings a unique perspective to her work, crafting aesthetic products and delivering refined solutions that elevate user experiences.
              Jennifer's journey spans across various industries, from emerging startups to well-established corporations, providing her with invaluable insights and a breadth of experience. Armed with expertise in Node, React, and React Native, she seamlessly navigates the complexities of web development, transforming ideas into reality with precision and finesse.
              Beyond coding, she finds joy in staying active, whether it's hitting the pavement for a run, immersing herself in a good book, or unleashing her creativity through writing.
            </p>
            <p className='bio-line'></p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
