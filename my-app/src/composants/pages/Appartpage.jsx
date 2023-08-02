
// import React, {useEffect, useState } from 'react'
// import "./Appartpage.scss"
// import DescPanel from "../DescPanel";
// import ImageBanner from "../ImageBanner"
// import AppartmentHeader from "../AppartmentHeader"
// import { Navigate, useParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// function Appartpage() {

//     const location = useLocation();
//     console.log("location", location);
//     const [Appart,setAppart]=useState(null);
    

//     useEffect(fetchAppsData, []);

//     function fetchAppsData() {
//         fetch("db.json")
//             .then((res) => res.json()) 
//             .then((apparts) => {

//                 const appart = apparts.find((flat) => flat.id === location.state.id);
//                  console.log("appart",appart);        
//                 setAppart(appart);

//             })
//             .catch(console.error);
//     }

//     if (Appart == null) {
//         return <div>...Loading</div>
//     }
//     return (
//         <div className='appartment-page'>

//             <ImageBanner pictures={Appart.pictures}/>
//             <AppartmentHeader Appart={Appart}/>

//             <div className="appartment-desc">
//                 <DescPanel title="Description" content={Appart.description} />
//                 <DescPanel title="Equipement" content={Appart.equipments.map((equi,i)=>
//                 <li key={i}>{equi}</li>)}/>
//             </div>
//         </div>
//     )
// }

// export default Appartpage






import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Appartpage.scss";
import DescPanel from "../DescPanel";
import ImageBanner from "../ImageBanner"
import AppartmentHeader from "../AppartmentHeader"
 import items from "../../data/db.json";

function Appartpage() {
    const { id } = useParams();
    const ficheItem = items.find((item) => item.id === id);
     
    if (ficheItem == null) {
        return <div>...Loading</div>
    }

    return (
        <div className='appartment-page'>

             <ImageBanner pictures={ficheItem.pictures}/>
             <AppartmentHeader Appart={ficheItem}/>

             <div className="appartment-desc">
                 <DescPanel title="Description" content={ficheItem.description} />
                 <DescPanel title="Equipement" content={ficheItem.equipments.map((equi,i)=>
                 <li key={i}>{equi}</li>)}/>
             </div>
         </div>
    )
}

export default Appartpage;


