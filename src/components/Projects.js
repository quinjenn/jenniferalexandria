import React from 'react';
import "./Projects.css";


const project = [
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
  return (
    <div className='projects-container'>
      <h3>Projects</h3>
      <div className='project-icons'>
        {project.map(icon => (
          <div key={icon.id}>
            <a href={icon.href}>
              <img
                src={icon.src}
                height={icon.id === 3 ? 800 : 300}
                width={icon.id === 3 ? 500 : 300}
                alt={icon.alt}
              />
            </a>
            <p>{icon.alt}</p>
            <p>{icon.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;








