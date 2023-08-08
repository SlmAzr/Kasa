 import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./Appart.scss"


function Appart(props) {
 
    
    return (
    
          
      	  <Link to={`/flat/${props.id}`}>
        
        <div className='appart'>
               <img className='cardimg' src={props.image} alt="" /> 
                <div className="title">{props.title}</div>      
            </div>
            </Link>
    )
}

export default Appart
