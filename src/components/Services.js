import React from 'react';
import './Services.css';


const Services = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const getDeviceType = () => {
    if (window.innerWidth >= 1024) {
      return 'desktop';
    } else if (window.innerWidth >= 464) {
      return 'tablet';
    } else {
      return 'mobile';
    }
  };


  return (
    <div id="services">

      <div className='services-background'>
        <div className="title-container">
          <p className="title-component">SERVICES & PRICING</p>
        </div>
        <div className='services-container'>
          <div className='services-container-one'>
            <div className="services-card">
              <p className='services-number'>01</p>
              <p className='services-header'>Shopify E-commerce Website</p>
              <p className='services-text-component'>Unlock the potential of your online store with the Shopify e-commerce website development service.</p>
              <p className='services-button'>Learn More</p>
            </div>
            <div className="services-card">
              <p className='services-number'>02</p>
              <p className='services-header'>One Page Static Website</p>
              <p className='services-text-component'> Perfect for showcasing your brand, portfolio, or product in a concise and impactful manner.</p>
              <p className='services-button'>Learn More</p>
            </div>
            <div className="services-card">
              <p className='services-number'>03</p>
              <p className='services-header'>Standard Website</p>
              <p className='services-text-component'>Whether you're a small business, entrepreneur, or organization, the standard website package provides the essential features and functionality to propel your online presence to new heights.</p>
              <p className='services-button'>Learn More</p>
            </div>
          </div>
          <div className='services-container-two'>
            <div className="services-card">
              <p className='services-number'>04</p>
              <p className='services-header'>Redesign:</p>
              <p className='services-header'>Shopify Website</p>
              <p className='services-text-component'>Breathe new life into your current e-commerce venture with our Shopify website redesign service.</p>
              <p className='services-button'>Learn More</p>
            </div>
            <div className="services-card">
              <p className='services-number'>05</p>
              <p className='services-header'>Redesign:</p>
              <p className='services-header'>One Page Website</p>
              <p className='services-text-component'> Say goodbye to outdated layouts and hello to a refreshed, dynamic one-page website that captivates your audience and drives meaningful engagement.</p>
              <p className='services-button'>Learn More</p>
            </div>
            <div className="services-card">
              <p className='services-number'>06</p>
              <p className='services-header'>Redesign:</p>
              <p className='services-header'>Standard Website</p>
              <p className='services-text-component'>For those seeking to refresh their brand identity, improve site navigation, or optimize for mobile responsiveness, a custom redesign strategy will be tailored to meet specific goals and objectives.</p>
              <p className='services-button'>Learn More</p>
            </div>
          </div>

          <div className='services-container-three'>
            <div className="services-card">
              <p className='services-number'>07</p>
              <p className='services-header'>Redesign:</p>
              <p className='services-header'>Website Edits</p>
              <p className='services-text-component'>From simple text and image replacements to intricate tweaks and coding fixes</p>
              <p className='services-button'>Learn More</p>
            </div>
          </div>
        </div>

      </div >
    </div >
  );
};

export default Services;
