import React from 'react'
import "./AppartmentHeader.scss"

function AppartmentHeader() {
  return (
    <div className="appartment-header">
    <div className="appartment-title">
        <h1> Crazy loft on canal Saint Martin</h1>
        <h2> Paris ile de france</h2>
        <div className="appartment-tags">
            <span>Cozy</span>
            <span>Canal</span>
            <span>Paris</span>
        </div>
    </div>
    <div className="appartment-owner">
        <div className="owner-details">
            <h3>
                <span>Alexandre</span>  <span>Dumas</span>
            </h3>
            <div className="badge"></div>
        </div>
        <div className="appartment-stars">
            <span className='on'>★</span>
            <span className='on'>★</span>
            <span className='on'>★</span>
            <span className='off'>★</span>
            <span className='off'>★</span>
        </div>
    </div>
</div>
  )
}

export default AppartmentHeader