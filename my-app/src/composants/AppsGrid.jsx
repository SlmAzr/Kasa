import React, { useEffect, useState } from 'react'
import "./AppsGrid.scss"
import Appart from "./Appart";
import items from "../data/db.json";



function AppsGrid() {
const [appartments, setAppartments]= useState([]);

useEffect(fetchAppartments,[])

function fetchAppartments(){ 
//   fetch("../../data/db.json")
//   .then((res)=> res.json())
// .then((res) => setAppartments(res))
// .catch(console.error);
setAppartments(items);
}


  return (
    <div className='grid'>
      {appartments.map((appartment)=>(
     <Appart title={appartment.title} image={appartment.cover} id={appartment.id}  key={appartment.id} />
     ))}

    
    
 
    </div>
    
  )
}

export default AppsGrid