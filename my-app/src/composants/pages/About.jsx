import React from 'react';
import ImageBanner from '../ImageBanner' ;
import DescPanel from '../DescPanel';
import "./About.scss";

function About() {
  return (
    <>
    <ImageBanner/>
    <div className="About-container">
        <DescPanel title="Fiabilité" content="chercher"/>
        <DescPanel title="Respect" content="chercher"/>
        <DescPanel title="Service" content="chercher"/>
        <DescPanel title="Responsabilité" content="chercher"/>
    </div>
    </>
  )
}

export default About