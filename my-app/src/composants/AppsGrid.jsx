import React, { useEffect, useState } from 'react'
import "./AppsGrid.scss"
import Appart from "./Appart";



function AppsGrid() {
const [appartments, setAppartments]= useState([]);

useEffect(fetchAppartments, []);

function fetchAppartments(){
  fetch("db.json").then((res)=> res.json())
.then((res) => setAppartments(res))
.catch(console.error);

}


  return (
    <div className='grid'>
      {appartments.map((appartment)=>(
     <Appart key={appartment} title={appartment.title} image={appartment.cover} id={appartment.id} />
     ))}

    
    
 
    </div>
    
  )
}

export default AppsGrid