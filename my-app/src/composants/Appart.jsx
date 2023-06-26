import React from 'react'
import { Link } from 'react-router-dom';
import "./Appart.scss"

function Appart(props) {
   
    
    const state = {
      id: props.id
    };
    return (
        <Link to="/flat" state={state}>
        <div className='appart'>
            
               <img className='cardimg' src={props.image} alt="" /> 
                <div className="title">{props.title}</div>
            
            </div>
            </Link>
    )
}

export default Appart