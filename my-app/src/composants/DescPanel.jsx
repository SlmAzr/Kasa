import React from 'react'
import "./DescPanel.scss";

function DescPanel(props) {
  return (
    <div className="descpanel">
      <p className='desc-header'>
        <span>{props.title}</span>
        <i className="fa-sharp fa-solid fa-chevron-up"></i>
      </p>

      <p className="desc-content">
        {props.content}
       </p>
    </div>
  )
}

export default DescPanel