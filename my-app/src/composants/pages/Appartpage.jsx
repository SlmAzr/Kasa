
import React  from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./Appartpage.scss";
import DescPanel from "../DescPanel";
import ImageBanner from "../ImageBanner"
import AppartmentHeader from "../AppartmentHeader"
 import items from "../../data/db.json";
import ErrorPage from './ErrorPage';


function Appartpage() {
    const navigate = useNavigate();
    const { id } = useParams();
    
    const ficheItem = items.find((item) => item.id === id);
     
    if (ficheItem == null) {
     return <ErrorPage/> 
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


