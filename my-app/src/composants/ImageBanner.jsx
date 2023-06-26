import React from 'react'
import "./ImageBanner.scss"

function ImageBanner(props) {
  const image = props.image ? props.image : "https://picsum.photos/1920/1080";
  return (
    <div className='image-banner'>
    <img src={image} alt="" />
</div>
  )
}

export default ImageBanner