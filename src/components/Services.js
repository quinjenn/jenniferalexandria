import React, { useState } from 'react';
import ReusableModal from './ReusableModal';
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

  const [modalIsOpen01, setModalIsOpen01] = useState(false);
  const [modalIsOpen02, setModalIsOpen02] = useState(false);
  const [modalIsOpen03, setModalIsOpen03] = useState(false);
  const [modalIsOpen04, setModalIsOpen04] = useState(false);
  const [modalIsOpen05, setModalIsOpen05] = useState(false);
  const [modalIsOpen06, setModalIsOpen06] = useState(false);
  const [modalIsOpen07, setModalIsOpen07] = useState(false);



  const openModal01 = () => {
    setModalIsOpen01(true);
  };

  const closeModal01 = () => {
    setModalIsOpen01(false);
  };

  const openModal02 = () => {
    setModalIsOpen02(true);
  };

  const closeModal02 = () => {
    setModalIsOpen02(false);
  };

  const openModal03 = () => {
    setModalIsOpen03(true);
  };

  const closeModal03 = () => {
    setModalIsOpen03(false);
  };

  const openModal04 = () => {
    setModalIsOpen04(true);
  };

  const closeModal04 = () => {
    setModalIsOpen04(false);
  };

  const openModal05 = () => {
    setModalIsOpen05(true);
  };

  const closeModal05 = () => {
    setModalIsOpen05(false);
  };

  const openModal06 = () => {
    setModalIsOpen06(true);
  };

  const closeModal06 = () => {
    setModalIsOpen06(false);
  };

  const openModal07 = () => {
    setModalIsOpen07(true);
  };

  const closeModal07 = () => {
    setModalIsOpen07(false);
  };
  return (
    <div id="services">

      <div className='services-background'>
        <div className="title-container">
          <p className="title-component">SERVICES</p>
        </div>
        <div className='services-container'>
          <div className='services-container-one'>
            <div className="services-card">
              <p className='services-number'>01</p>
              <p className='services-header'>Shopify E-commerce Website</p>
              <p className='services-text-component'>Unlock the potential of your online store with the Shopify e-commerce website development service.</p>
              <p className='services-button' onClick={openModal01}>Learn More</p>
              <ReusableModal
                isOpen={modalIsOpen01}
                onRequestClose={closeModal01}
                number="01"
                title="Shopify E-commerce Website"
                subtitle="What the process looks like:"
                content="➤ 60 minute consultation"
                content2="➤ Design and Build Homepage"
                content3="➤ Product pages"
                content4="➤ Collection pages"
                content5="➤ Up to three additional pages (FAQ, sizing, shipping, return policy, about us, ingredients etc.)"
                content6="➤ Two review sessions for tweaks and edits"
                content7="❄ Add-ons: edits after launch (hourly)"
              />
            </div>
            <div className="services-card">
              <p className='services-number'>02</p>
              <p className='services-header'>One Page Static Website</p>
              <p className='services-text-component'> Perfect for showcasing your brand, portfolio, or product in a concise and impactful manner.</p>
              <p className='services-button' onClick={openModal02}>Learn More</p>
              <ReusableModal
                isOpen={modalIsOpen02}
                onRequestClose={closeModal02}
                number="02"
                title="One Page Static Website"
                subtitle="What the process looks like:"
                content="➤ 45 minute consultation"
                content2="➤ One page design: header, footer, and up to six sections"
                content3="➤ One review session for tweaks and edits"
                content4="❄ Add-ons: edits after launch (hourly)"
              />
            </div>
            <div className="services-card">
              <p className='services-number'>03</p>
              <p className='services-header'>Standard Website</p>
              <p className='services-text-component'>Whether you're a small business, entrepreneur, or organization, the standard website package provides the essential features and functionality to propel your online presence to new heights.</p>
              <p className='services-button' onClick={openModal03}>Learn More</p>
              <ReusableModal
                isOpen={modalIsOpen03}
                onRequestClose={closeModal03}
                number="03"
                title="Standard Website"
                subtitle="What the process looks like:"
                content="➤ 60 minute consultation"
                content2="➤ Design and build up to six pages"
                content3="➤ Two review sessions for tweaks and edits"
                content4="❄ Add-ons: edits after launch (hourly)"
              />
            </div>

          </div>
          <div className='services-container-two'>
            <div className="services-card">
              <p className='services-number'>04</p>
              <p className='services-header'>Redesign:</p>
              <p className='services-header'>Existing Shopify Website</p>
              <p className='services-text-component'>Breathe new life into your current e-commerce venture with our Shopify website redesign service.</p>
              <p className='services-button' onClick={openModal04}>Learn More</p>
              <ReusableModal
                isOpen={modalIsOpen04}
                onRequestClose={closeModal04}
                number="04"
                title="Redesign: Existing Shopify Website"
                subtitle="What the process looks like:"
                content="➤ 60 minute consultation"
                content2="➤ Redesign and build of Homepage"
                content3="➤ Redesign and build of Product pages"
                content4="➤ Redesign and build of Collection pages"
                content5="➤ Redesign and build of up to three additional pages"
                content6="➤ Two review sessions for tweaks and edits"
                content7="❄  Add-ons available: creation of more pages, edits after launch (hourly)"

              />
            </div>
            <div className="services-card">
              <p className='services-number'>05</p>
              <p className='services-header'>Redesign:</p>
              <p className='services-header'>Existing One Page</p>
              <p className='services-text-component'> Say goodbye to outdated layouts and hello to a refreshed, dynamic one-page website that captivates your audience and drives meaningful engagement.</p>
              <p className='services-button' onClick={openModal05}>Learn More</p>
              <ReusableModal
                isOpen={modalIsOpen05}
                onRequestClose={closeModal05}
                number="05"
                title="Redesign: Existing One Page Website"
                subtitle="What the process looks like:"
                content="➤ 45 minute consultation"
                content2="➤ One page redesign: header, footer, and up to six sections"
                content3="➤ One review session for tweaks and edits"
                content4="❄ Add-ons: edits after launch (hourly)"
              />
            </div>
            <div className="services-card">
              <p className='services-number'>06</p>
              <p className='services-header'>Redesign:</p>
              <p className='services-header'>Existing Standard</p>
              <p className='services-text-component'>For those seeking to refresh their brand identity, improve site navigation, or optimize for mobile responsiveness, a custom redesign strategy will be tailored to meet specific goals and objectives.</p>
              <p className='services-button' onClick={openModal06}>Learn More</p>
              <ReusableModal
                isOpen={modalIsOpen06}
                onRequestClose={closeModal06}
                number="06"
                title="Redesign: Existing Standard Website"
                subtitle="What the process looks like:"
                content="➤ 60 minute consultation"
                content2="➤ Up to five pages redesign and build"
                content3="➤ Two review sessions for tweaks and edits"
                content4="❄ Add-ons: edits after launch (hourly)"
              />
            </div>
          </div>
          <div className='services-container-three'>
            <div className="services-card">
              <p className='services-number'>07</p>
              <p className='services-header'>Redesign:</p>
              <p className='services-header'>Website Edits</p>
              <p className='services-text-component'>From simple text and image replacements to intricate tweaks and coding fixes</p>
              <p className='services-button' onClick={openModal07}>Learn More</p>
              <ReusableModal
                isOpen={modalIsOpen07}
                onRequestClose={closeModal07}
                number="07"
                title="Website Edits (hourly rate)"
                subtitle="What the process looks like:"
                content="➤ Video call/screen share to discuss improvements needed"
                content2="➤ Edits range from text and image replacement, tweaks on your site, fixing the look on mobile, or anything that needs to be coded"
                content3="➤ Time/cost estimate for your edits."
              />
            </div>
          </div>
        </div>

      </div >
    </div >
  );
};

export default Services;
