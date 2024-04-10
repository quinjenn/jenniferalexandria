import React from 'react';
import './Services.css';

const Services = () => {
  // const handleClick = () => {
  //   window.open('https://google.com', '_blank');
  // };
  return (
    <div id="services">

      <div className='services-background'>
        <div className="title-container">
          <p className="title-component">SERVICES & PRICING</p>
        </div>
        <div className='services-container'>
          <div className="services-card">
            <p className='services-header'>Shopify E-commerce Website $6,575</p>
            <div className='services-text-container'>
              <p className='text-component'>60 min consultation</p>
              <p className='text-component'>design and build homepage, product pages, collection pages, and up to 3 extra pages (FAQ, sizing, shipping, return policy, about us, ingredients etc.)</p>
            </div>
            <div className='services-text-container'>
              <p className='text-component'>2 review sessions for tweaks and edits</p>
              <p className='text-component'>we will work together to find a template that you love and customize it to your store needs</p>
            </div>
            <div className='services-text-container'>
              <p className='text-component'>Add-ons</p>
              <p className='text-component'>edits after launch (hourly)</p>
            </div>
            <div className='services-button-container'>
              {/* <button className='button-3' onClick={handleClick}>Add a Call-to-Action</button> */}
            </div>
          </div>
          <div className="services-card">
            <p className='services-header'>React One Page Website $1,199</p>
            <div className='services-text-container'>
              <p className='text-component'>45 min consultation</p>
              <p className='text-component'>One page design: header, footer, and up to 6 sections</p>
            </div>
            <div className='services-text-container'>
              <p className='text-component'>1 review sessions for tweaks and edits</p>
              <p className='text-component'>we will work together to find a template that you love and customize it to your needs</p>
            </div>
            <div className='services-text-container'>
              <p className='text-component'>Add-ons</p>
              <p className='text-component'>edits after launch (hourly)</p>
            </div>
            <div className='services-button-container'>
              {/* <button className='button-3' onClick={handleClick}>Add a Call-to-Action</button> */}
            </div>
          </div>

          <div className="services-card">
            <p className='services-header'>React - Standard Website $3,575</p>
            <div className='services-text-container'>
              <p className='text-component'>60 min consultation</p>
              <p className='text-component'>up to 6 pages</p>
            </div>
            <div className='services-text-container'>
              <p className='text-component'>2 review sessions for tweaks and edits</p>
              <p className='text-component'>we will work together to find a template that you love and customize it to your needs</p>
            </div>
            <div className='services-text-container'>
              <p className='text-component'>Add-ons</p>
              <p className='text-component'>edits after launch (hourly)</p>
            </div>
            <div className='services-button-container'>
              {/* <button className='button-3' onClick={handleClick}>Add a Call-to-Action</button> */}
            </div>
          </div>
        </div>
      </div >
    </div>
  );
};

export default Services;
