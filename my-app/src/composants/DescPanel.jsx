import React, { useState } from 'react'
import "./DescPanel.scss";

function DescPanel(props) {
  const [isVisible,setIsVisible]=useState(false);
  const show= ()=>{ 
    setIsVisible(!isVisible)

  }
  const contentClass = (isVisible ? "visible" : "hidden") + " desc-content";
  const rotation = (isVisible ? "rotates": "");
  const push = (isVisible ? "push": "") + " descpanel";
  return (
    <div className={push}>
      <p className='desc-header ' onClick={show}>
        <span>{props.title}</span>

        <i className={rotation}><i class="fas fa-chevron-down"></i></i>
      </p>
   
    <p className={contentClass}>  {props.content} </p>
    </div>
  )
}

export default DescPanel