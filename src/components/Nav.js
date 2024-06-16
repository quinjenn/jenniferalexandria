import React, { useState, useEffect } from 'react';
import "./Nav.css";


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

  const brand1Size = Math.max(40 - scrollY / 10, 22);
  const brand2Size = Math.max(20 - scrollY / 20, 11);

  return (
    <div className="nav-heading">
      <p className='brand-1' style={{ fontSize: brand1Size + 'px' }}>jenniferalexandria</p>
      <p className='brand-2' style={{ fontSize: brand2Size + 'px' }}>FULL STACK DEVELOPER</p>
    </div>
  );
};

export default Nav;
