import React, { useState, useEffect } from 'react';
import "./Nav.css";
import Modal from './Modal.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const brand1Size = Math.max(40 - scrollY / 10, 30);
  const brand2Size = Math.max(20 - scrollY / 20, 15);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <div className={`nav-drawer ${drawerOpen ? 'open' : ''}`}>
        <p>Drawer Content</p>
        <button onClick={closeDrawer} className='modal-icon2'><FontAwesomeIcon icon={faXmark} style={{ color: '#000000', marginRight: '20px' }} size='2xl' /></button>
      </div>
      <div className="nav-heading" style={{ position: "fixed", top: 0, width: "100%", background: "#fff", zIndex: 100 }}>
        <button onClick={openDrawer} className='modal-icon'>
          <FontAwesomeIcon icon={faBars} style={{ color: '#000000', marginRight: '20px' }} size='2xl' />
        </button>
        <Modal isOpen={drawerOpen} onClose={closeDrawer} />
        <p className='brand-1' style={{ fontSize: brand1Size + 'px' }}>jenniferalexandria</p>
        <p className='brand-2' style={{ fontSize: brand2Size + 'px' }}>FULL STACK DEVELOPER</p>
      </div>
    </div>
  );
};

export default Nav;
