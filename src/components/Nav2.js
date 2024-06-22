import React, { useState } from 'react';
import './Nav2.css';
import { Link } from 'react-scroll';
import ContactForm from './ContactForm';


const Nav2 = () => {
  const [modalIsOpenContact, setModalIsOpenContact] = useState(false);



  const openModalContact = () => {
    setModalIsOpenContact(true);
  };

  const closeModalContact = () => {
    setModalIsOpenContact(false);
  };
  return (
    <div className="nav-links-container">
      <div className='wrapper'>
        <ul className="nav-titles">
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <button onClick={openModalContact} className="contact-button">
              CONTACT
            </button>
          </li>
        </ul>
      </div>
      <ContactForm isOpen={modalIsOpenContact} onRequestClose={closeModalContact} />
    </div>
  );
};

export default Nav2;
