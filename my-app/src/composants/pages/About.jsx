import React from 'react';
import ImageBanner from '../ImageBanner' ;
import DescPanel from '../DescPanel';
import "./About.scss";

function About() {
  return (
    <>
    <ImageBanner/>
    <div className="About-container">
        <DescPanel/>
        <DescPanel/>
        <DescPanel/>
        <DescPanel/>
    </div>
    </>
  )
}

export default About