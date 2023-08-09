// export default ImageBanner;
import React, { useState } from "react";
import "./ImageBanner.scss";

function ImageBanner(props) {
  const pictures = props.pictures;

  // État pour suivre l'index de l'image actuellement affichée
  const [currentPic, setCurrentPic] = useState(0);

  // Fonction pour obtenir la classe CSS en fonction de l'index de l'image
  const getClassName = (i) => {
    if (i === currentPic) return "show";
    return "";
  };

  // Fonction pour afficher l'image suivante
  const suivant = () => {
    setCurrentPic((currentPic + 1) % pictures.length);
  };

  // Fonction pour afficher l'image précédente
  const precedent = () => {
    if (currentPic === 0) {
      setCurrentPic(pictures.length - 1);
      return;
    }
    setCurrentPic((currentPic - 1) % pictures.length);
  };

  // Vérifie s'il y a des images à afficher
  const picturePre = () => {
    return pictures && pictures.length > 0;
  };

  // Fonction pour afficher les images dans un carrousel ou l'image par défaut si aucune image
  const defautOrCarousel = () => {
    if (!picturePre()) {
      return <img src="default-mont.jpeg" className="show" alt="" />;
    }
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} className={getClassName(i)}></img>
    ));
  };

  return (
    <div className="image-banner">
      <div className="img-container">{defautOrCarousel()}</div>

      {/* Affiche les boutons de navigation et le compteur d'image */}
      {picturePre() && (
        <>
          <button className=" btn btn-suiv" onClick={suivant}>
            <i className="fas fa-chevron-right"></i>
          </button>
          <span className="counter">
            {currentPic + 1}/{pictures.length}
          </span>
          <button className="btn btn-prec" onClick={precedent}>
            <i className="fas fa-chevron-left"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default ImageBanner;
