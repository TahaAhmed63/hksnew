"use-client"

import Image from 'next/image'
import React from 'react'
import Settingimg from '../../assets/homepage-images/group-3.png'
import Flask from '../../assets/homepage-images/2-2.png'
import Global from '../../assets/homepage-images/3.png'
import Award  from '../../assets/homepage-images/4.png'
import MaskGroup from '../../assets/homepage-images/mask-group-1.png'

// data.js
export const services = [
    {
      img: Settingimg,
      description: "Blends Korean-based oil with Group 2 products in a high-tech plant in Pakistan.",
    },
    {
      img: Flask,
      description: "Provides a facility of oil sample testing laboratory.",
    },
    {
      img: Global,
      description: "Delivers reliable blending services across Pakistan.",
    },
    {
      img: Award,
      description: "Award-winning service quality in the oil blending sector.",
    },
  ];
  



  const BlendingPlant = () => {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6 content-bg'>
            <div className='content-wrap'>
              <h2>Lube Oil <br/> Blending Plant</h2>
              <p>HKS GLOBAL PETROLEUM is blending Korean based oil with group 2 products at high-tech plant, which is one of the reliable and infallible toll blending plant in Pakistan. We are also providing a facility of oil sample testing laboratory.</p>
              <h3 className='mb-4'><strong>Explore Service</strong></h3>
            </div>
  
            <div className='explore-serv-content'>
              {services.map((service, index) => (
                <div key={index} className={`exp-serv-row ${Math.floor(index / 2) + 1}`}>
                  <div className='icon-col p-2'>
                    <Image src={service.img} alt={`Service ${index + 1}`} />
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='col-md-6 p-0'>
                <Image src={MaskGroup}  />
          </div>
        </div>
      </div>
    );
  };
  
  export default BlendingPlant;