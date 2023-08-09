import React from 'react';
import "./Contact.css";

const icons = [
  {
    id: 1,
    src: '/icons/gmail-icon.jpg',
    alt: 'Gmail',
    href: 'mailto:quintal.jenn@gmail.com?subject=Website%20Form:&body=Hi%20Jenn%2C',
    text: '',
  },
  {
    id: 2,
    src: '/icons/linkedin-icon.png',
    alt: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jennifer-alexandria-quintal-419b527a/',
    text: '',
  },
  {
    id: 3,
    src: '/icons/github.png',
    alt: 'GitHub',
    href: 'https://github.com/quinjenn',
    text: '',
  },
  {
    id: 4,
    src: '/icons/insta-icon.jpeg',
    alt: 'Instagram',
    href: 'https://www.instagram.com/_jenniferalexandria/',
    text: '',
  },
  {
    id: 5,
    src: '/icons/medium-icon.png',
    alt: 'Medium',
    href: 'https://medium.com/@quintal.jenn',
    text: '',
  }];

const Contact = () => {
  return (
    <div className='contact-container'>
      <h3>jenniferalexandria</h3>
      <div className='contact-icons'>
        {icons.map(icon => (
          <a
            key={icon.id}
            href={icon.href}
          >
            <img
              src={icon.src} height={50}
            />
          </a>
        ))}
      </div>
      <p>© copyright 2023 jenniferalexandria</p>
    </div>
  );
};

export default Contact;
