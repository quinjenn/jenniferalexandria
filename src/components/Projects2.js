import React from 'react';
import "./Projects2.css";

const Projects2 = () => {
  return (
    <div id="projects2">
      <div className='projects-container'>
        <div className="title-container">
          <p className='title-component'>PROJECTS</p>
        </div>



        <div class="container">
          <div class="content">

            <div class="wrapper">
              <div class="box vintage">
                <a href="https://github.com/quinjenn/route-roamer" target="_blank">
                  <img src="/projects/rr-3.png" alt="Route Roamer" />
                </a>
                {/* <h2>Route Roamer</h2> */}
                {/* <p>an application where users can create an AI-generated, personalized travel itinerary for anywhere around the world and suggested activities will appear on Google Maps</p> */}
              </div>
            </div>


            <div class="wrapper">
              <div class="box postcard">
                <a href="https://github.com/quinjenn/scheduler" target="_blank">
                  <img src="/projects/scheduler-2.png" alt="Scheduler" />
                </a>
                {/* <h2>Scheduler<p class="hide"> <p>React based application to book interview appointments between students and mentors</p>
              </p></h2> */}
              </div>
            </div>


            <div class="wrapper">
              <div class="box zoom-in">
                <a href="https://github.com/quinjenn/tweeter" target="_blank">
                  <img src="/projects/Tweeter-1.png" alt="Tweeter" />
                </a>
                {/* <h2>Tweeter</h2>
              <p>an application where users can create an AI-generated, personalized travel itinerary for anywhere around the world and suggested activities will appear on Google Maps</p> */}
              </div>
            </div>


            <div class="wrapper">
              <div class="box blury-card">
                <a href="https://github.com/quinjenn/WikiMap" target="_blank">
                  <img src="/projects/jnmaps-1.png" alt="JNMaps" />
                </a>
                <div class="frame"></div>
                {/* <h2>JNMaps</h2>
                <p>an application where using Google Maps API, users can create, view and modify maps</p> */}
              </div>
            </div>




            <div class="wrapper">
              <div class="box zoom-out">
                <a href="https://github.com/quinjenn/jungle-rails" target="_blank">
                  <img src="/projects/Jungle-1.png" alt="Jungle" />
                </a>
                <div class="frame"></div>
                {/* <h2>Jungle <span>NOIR</span></h2> */}
                {/* <p>a mini e-commerce application where users can view and purchase products in a secure environment using the Stripe API</p> */}
              </div>
            </div>
          </div>
        </div>





      </div>
    </div>
  );
};


export default Projects2;








