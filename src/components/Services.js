import React from 'react';
import './Services.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomRightArrow, CustomLeftArrow } from './CustomArrows';


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
          <Carousel
            // customRightArrow={<CustomRightArrow />}
            // customLeftArrow={<CustomLeftArrow />}
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={getDeviceType()}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
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
            </div>
            <div className="services-card">
              <p className='services-header'>Redesign My Existing Shopify E-commerce Website - $4,175</p>
              <div className='services-text-container'>
                <p className='text-component'>60 min consultation</p>
                <p className='text-component'>Redesign and build of homepage, product pages, collection pages, and up to 3 currently launched extra pages (page examples include FAQ, sizing, shipping, return policy, about us, ingredients etc.)</p>
              </div>
              <div className='services-text-container'>
                <p className='text-component'>2 review sessions for tweaks and edits</p>
                <p className='text-component'>We will work together to evaluate what worked and what didn't with your first design and what you would like to see changed. We will go through any areas of concern and make sure the design works for both you and your customers.</p>
              </div>
              <div className='services-text-container'>
                <p className='text-component'>Add-ons available</p>
                <p className='text-component'>creation of more pages or edits after launch (hourly)</p>
              </div>
            </div>
            <div className="services-card">
              <p className='services-header'>Redesign: One Page Site - $999</p>
              <div className='services-text-container'>
                <p className='text-component'>45 min consultation</p>
                <p className='text-component'>One page design: header, footer, and up to 6 sections.</p>
              </div>
              <div className='services-text-container'>
                <p className='text-component'>1 review sessions for tweaks and edits</p>
                <p className='text-component'>We will work together to evaluate what worked and what didn't with your first design and what you would like to see changed. We will go through any areas of concern and make sure the design works for both you and your audience.</p>
              </div>
            </div>
            <div className="services-card">
              <p className='services-header'>Redesign: Standard Site - $2,850</p>
              <div className='services-text-container'>
                <p className='text-component'>60 min consultation</p>
                <p className='text-component'>Up to 5 pages.</p>
              </div>
              <div className='services-text-container'>
                <p className='text-component'>2 review sessions for tweaks and edits</p>
                <p className='text-component'>We will work together to evaluate what worked and what didn't with your first design and what you would like to see changed. We will go through any areas of concern and make sure the design works for both you and your audience.</p>
              </div>
            </div>
            <div className="services-card">
              <p className='services-header'>Redesign: Website Edits - $99/hr</p>
              <div className='services-text-container'>
                <p className='text-component'>Edits range from text and image replacement, tweaks on your site, fixing the look on mobile, or anything that needs to be coded.</p>
              </div>
              <div className='services-text-container'>
                <p className='text-component'>Video call/screen share to discuss improvements to make on your site and why they will help achieve your goals, if requested.</p>
                <p className='text-component'>Time/cost estimate for your edits.</p>
              </div>
            </div>
          </Carousel>

        </div>

      </div >
    </div >
  );
};

export default Services;
