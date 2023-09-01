import React from 'react';
import "./Contact.css";

const icons = [
  {
    id: 1,
    src: '/icons/email3.png',
    alt: 'Gmail',
    href: 'mailto:quintal.jenn@gmail.com?subject=Website%20Form:&body=Hi%20Jenn%2C',
    text: '',
  },
  {
    id: 2,
    src: '/icons/linkedin3.png',
    alt: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jennifer-alexandria-quintal-419b527a/',
    text: '',
  },
  {
    id: 3,
    src: '/icons/github3.png',
    alt: 'GitHub',
    href: 'https://github.com/quinjenn',
    text: '',
  },
  {
    id: 4,
    src: '/icons/insta3.png',
    alt: 'Instagram',
    href: 'https://www.instagram.com/_jenniferalexandria/',
    text: '',
  },
  {
    id: 5,
    src: '/icons/medium2.png',
    alt: 'Medium',
    href: 'https://medium.com/@quintal.jenn',
    text: '',
  }];

const Contact = () => {
  return (
    <div id="contact">
      <div className='contact-container'>
        <p className='brand-3'>jenniferalexandria</p>
        <div className='contact-icons'>
          {icons.map(icon => (
            <a
              key={icon.id}
              href={icon.href}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={icon.src} height={75} alt='icons' className="icon-image"
              />
            </a>
          ))}
        </div>
      </div>
      <p id="copyright">© copyright 2023 jenniferalexandria</p>
    </div>
  );
};

export default Contact;
