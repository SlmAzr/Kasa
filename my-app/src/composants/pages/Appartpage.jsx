import React from 'react'
import "./Appartpage.scss"
import DescPanel from"../DescPanel";
import ImageBanner from "../ImageBanner"
import AppartmentHeader from "../AppartmentHeader"

function Appartpage() {
    return (
        <div className='appartment-page'>
    <ImageBanner/>
    <AppartmentHeader/>
           
            
    <div className="appartment-desc-ria">
        <DescPanel/>
        <DescPanel/>
    </div>

        </div>

    )
}

export default Appartpage