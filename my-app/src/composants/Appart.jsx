import React from 'react'
import { Link } from 'react-router-dom';
import "./Appart.css"

function Appart() {
    return (
        <Link to="/flat">
        <div className='appart'>
            
                {/* <img className='cardimg' src="https://picsum.photos/300/200" alt="" /> */}
                <div className="title">Titre de la location</div>
            
            </div>
            </Link>
    )
}

export default Appart