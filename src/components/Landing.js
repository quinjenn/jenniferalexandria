import React from 'react';
import "./Landing.css";

const Landing = () => {
  return (
    <div id="landing">
      <div className='landing-container'>
        <div
          className="landing-title-container"
          style={{
            backgroundImage: `url('/images/JQ2.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "95%",
            height: "100vh",
            filter: "blur(4px)",

          }}>
        </div>
        <div className="landing-content">
          <p className='landing-title-component'>Elevating Your Online Presence
          </p>
          <p className='landing-title-component2'>With Bespoke Website Solutions
          </p>
        </div>
      </div>
    </div>
  );
};


export default Landing;








