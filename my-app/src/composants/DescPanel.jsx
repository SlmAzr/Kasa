import React, { useState } from 'react'
import "./DescPanel.scss";

function DescPanel(props) {
  const [isVisible,setIsVisible]=useState(false);
  const show= ()=>{ 
    setIsVisible(!isVisible)

  }
  const contentClass = (isVisible ? "visible" : "hidden") + " desc-content";
  const chevronClass = (isVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";
  return (
    <div className="descpanel">
      <p className='desc-header ' onClick={show}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </p>
    {/* {isVisible ? "visible":"hidden"} */}
    <p className={contentClass}>  {props.content} </p>
    </div>
  )
}

export default DescPanel