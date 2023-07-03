
import React, { useEffect, useState } from 'react'
import "./Appartpage.scss"
import DescPanel from "../DescPanel";
import ImageBanner from "../ImageBanner"
import AppartmentHeader from "../AppartmentHeader"
import { useLocation } from 'react-router-dom';

function Appartpage() {
    const location = useLocation();
    console.log("location", location.state.id);
    const [Appart,setAppart]=useState(null);

    useEffect(fetchAppsData, []);

    function fetchAppsData() {
        fetch("db.json")
            .then((res) => res.json()) 
            .then((apparts) => {
                const appart = apparts.find((flat) => flat.id === location.state.id);
                setAppart(appart);
            })
            .catch(console.error);
    }
    if (Appart == null) {
        return <div>...Loading</div>
    }
    return (
        <div className='appartment-page'>
           
            <ImageBanner pictures={Appart.pictures}/>
            <AppartmentHeader Appart={Appart}/>

            <div className="appartment-desc">
                <DescPanel title="Description" content={Appart.description} />
                <DescPanel title="Equipement" content={Appart.equipments.map((equi,i)=>
                <li key={i}>{equi}</li>)}/>
            </div>
        </div>
    )
}

export default Appartpage
