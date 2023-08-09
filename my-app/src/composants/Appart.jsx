import React from "react";
import { Link } from "react-router-dom";
import "./Appart.scss";

function Appart(props) {
  // Renvoie un lien vers la page détaillée de l'appartement en utilisant le composant Link
  return (
    <Link to={`/flat/${props.id}`}>
      <div className="appart">
        <img className="cardimg" src={props.image} alt="" />
        <div className="title">{props.title}</div>
      </div>
    </Link>
  );
}

export default Appart;
