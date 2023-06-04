import React from 'react'
import { Link } from 'react-router-dom';
import "./Appart.css"

function Appart() {
    return (

        <div className='appart'>
            <Link to="/flat">
                <div className="title">Titre de la location</div>
            </Link>
            </div>
    )
}

export default Appart