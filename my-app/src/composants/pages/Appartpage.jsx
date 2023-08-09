import React from "react";
import { useParams } from "react-router-dom";
import "./Appartpage.scss";
import DescPanel from "../DescPanel";
import ImageBanner from "../ImageBanner";
import AppartmentHeader from "../AppartmentHeader";
import items from "../../data/db.json";
import ErrorPage from "./ErrorPage";

function Appartpage() {
  const { id } = useParams(); // Obtient l'ID de l'appartement à partir des paramètres d'URL
  const ficheItem = items.find((item) => item.id === id); // Recherche l'appartement correspondant dans les données

  if (ficheItem == null) {
    return <ErrorPage />; // Renvoie la page d'erreur si l'appartement n'est pas trouvé
  }

  // Renvoie la structure JSX de la page d'appartement avec les détails de l'appartement
  return (
    <div className="appartment-page">
      <ImageBanner pictures={ficheItem.pictures} />
      <AppartmentHeader Appart={ficheItem} />

      <div className="appartment-desc">
        <DescPanel title="Description" content={ficheItem.description} />
        <DescPanel
          title="Equipement"
          content={ficheItem.equipments.map((equi, i) => (
            <li key={i}>{equi}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default Appartpage;
