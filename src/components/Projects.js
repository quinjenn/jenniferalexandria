import React from 'react';
import "./Projects.css";


const projectData = [
  {
    id: 1,
    src: '/projects/jnmaps-1.png',
    alt: 'JNMaps',
    href: 'https://github.com/quinjenn/WikiMap',
    text: 'an application where using Google Maps API, users can create, view and modify maps',
  },
  {
    id: 2,
    src: '/projects/Tweeter-2.png',
    alt: 'Tweeter',
    href: 'https://github.com/quinjenn/tweeter',
    text: 'a single page Twitter clone where users can compose a 140 character tweet',
  },
  {
    id: 3,
    src: '/projects/rr-5.png',
    alt: 'Route Roamer',
    href: 'https://github.com/quinjenn/route-roamer',
    text: 'an application where users can create an AI-generated, personalized travel itinerary for anywhere around the world and suggested activities will appear on Google Maps',
  },
  {
    id: 4,
    src: '/projects/Jungle-1.png',
    alt: 'Jungle',
    href: 'https://github.com/quinjenn/jungle-rails',
    text: 'a mini e-commerce application where users can view and purchase products in a secure environment using the Stripe API',
  },
  {
    id: 5,
    src: '/projects/scheduler-3.png',
    alt: 'Scheduler',
    href: 'https://github.com/quinjenn/scheduler',
    text: 'React based application to book interview appointments between students and mentors',
  }];


const Projects = () => {
  const firstDivProjects = projectData.filter(icon => icon.id === 1 || icon.id === 2);
  const secondDivProjects = projectData.filter(icon => icon.id === 3);
  const thirdDivProjects = projectData.filter(icon => icon.id === 4 || icon.id === 5);

  return (
    <div id="projects">
      <div className='projects-container'>
        <div className="title-container">
          <p className='title-component'>Projects</p>
        </div>
        <div className='project-icons'>
          <div className='horizontal-container'>
            <div className='vertical-container'>
              {firstDivProjects.map(icon => (
                <div key={icon.id} className='vertical-project'>
                  <a href={icon.href}>
                    <img
                      src={icon.src}
                      height={500}
                      width={450}
                      alt={icon.alt}
                    />
                  </a>
                  <div className='icon-text'>
                    <p className='icon-title'>{icon.alt}</p>
                    <p className='icon-para'>{icon.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='large-project'>
              {secondDivProjects.map(icon => (
                <div key={icon.id}>
                  <a href={icon.href}>
                    <img
                      src={icon.src}
                      height={950}
                      width={650}
                      alt={icon.alt}
                    />
                  </a>
                  <div className='icon-text'>
                    <p className='icon-title'>{icon.alt}</p>
                    <p className='icon-para'>{icon.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='vertical-container'>
              {thirdDivProjects.map(icon => (
                <div key={icon.id} className='vertical-project'>
                  <a href={icon.href}>
                    <img
                      src={icon.src}
                      height={500}
                      width={450}
                      alt={icon.alt}
                    />
                  </a>
                  <div className='icon-text'>
                    <p className='icon-title'>{icon.alt}</p>
                    <p className='icon-para'>{icon.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Projects;








