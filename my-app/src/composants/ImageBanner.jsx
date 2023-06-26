import React from 'react'
import "./ImageBanner.scss"

function ImageBanner(props) {
  return (
    <div className='image-banner'>
    <img src={props.image} alt="" />
</div>
  )
}

export default ImageBanner