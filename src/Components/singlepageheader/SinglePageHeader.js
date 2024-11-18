"use-client"
import Image from 'next/image'
import React from 'react'

const SinglePageHeader = (props) => {
    const {pagebanner,title}=props;
    console.log(pagebanner,"singlePageheader")
  return (
    <div className="singpgbanner">
    <img src={pagebanner?.src} />
    <div className="singpg-title text-center">
      <h1>{title}</h1>
    </div>
  </div>
  )
}

export default SinglePageHeader