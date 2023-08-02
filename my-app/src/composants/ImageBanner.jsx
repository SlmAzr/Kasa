import React, { useState } from 'react'
import "./ImageBanner.scss"

function ImageBanner(props) {
 
  const pictures = props.pictures;

  const[currentPic, setCurrentPic] = useState(0);
  
  const getClassName = (i) => {
    if (i === currentPic) return "show";
    return "";
  };

  const suivant= () => {
    setCurrentPic((currentPic + 1) % pictures.length);
  };

  const precedent= () => {
  
    if(currentPic === 0){
      setCurrentPic(pictures.length -1);
      return;
    }
    setCurrentPic((currentPic - 1) % pictures.length);
  };

  const picturePre = () => {
    return pictures && pictures.length>0
  }

  const defautOrCarousel= () =>{ 
    if(!picturePre()){
      return <img src="https://picsum.photos/1080" className='show' alt="" />
    }
     return pictures.map((pic, i)=>(
      <img  key={pic} src={pic} className={getClassName(i)}></img>
      ));

  }
  
 
  return (
    <div className='image-banner'>
     
<div className="img-container">
  { defautOrCarousel() }
</div>

 {picturePre() && (<> 
  <button className=" btn btn-suiv" onClick={suivant} ><i class="fas fa-chevron-right"></i></button>
  <span className='counter'>{currentPic+1 }/{pictures.length}</span>
<button className='btn btn-prec' onClick={precedent}><i class="fas fa-chevron-left"></i>
</button>
</>
)}
</div>
  );
}

export default ImageBanner