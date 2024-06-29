import React, { useState } from 'react';
// Import des images pour les flèches de navigation
import Next from '../assets/Arrow-right.png';
import Previous from '../assets/Arrow-left.png';

const Slideshow = ({ pictures }) => {
  // State
  let [numberStart, setNumberStart] = useState(1); // Numéro de départ pour afficher les images
  const [index, setIndex] = useState(0); // Index de l'image actuellement affichée
  const [imageUrl, setImageUrl] = useState(pictures[0]); // URL de l'image actuellement affichée
  const totalImages = pictures.length; // Nombre total d'images dans le slideshow

  // Comportement pour passer à l'image suivante
  const handleClickNext = () => {
    // Calcul du nouvel index en bouclant à travers les images
    let newIndex = (index + 1) % totalImages;
    setIndex(newIndex); // Mise à jour de l'index
    setImageUrl(pictures[newIndex]); // Mise à jour de l'URL de l'image affichée
    // Mise à jour du numéro de départ pour l'affichage (s'il atteint le nombre total, il revient à 1)
    setNumberStart(prevNumberStart => {
      if (prevNumberStart >= totalImages) {
        return 1;
      } else {
        return prevNumberStart + 1;
      }
    });
  };

  // Comportement pour passer à l'image précédente
  const handleClickPrevious = () => {
    const newIndex = (index - 1 + totalImages) % totalImages;
    setIndex(newIndex); 
    setImageUrl(pictures[newIndex]);
    setNumberStart(prevNumberStart => {
      if (prevNumberStart <= 1) {
        return totalImages;
      } else {
        return prevNumberStart - 1;
      }
    });
  };

  // Rendu du composant
  return (
    <div className='slide'>
      {/* Conteneur pour l'image principale */}
      <figure className='carrousel'>
        <img src={imageUrl} alt="apppartement" className='accomodation-picture' />
      </figure>
      
      {/* Affichage du numéro de l'image actuelle */}
      <p className={totalImages === 1 ? 'display-none' : "footer-number"}>{numberStart}/{totalImages}</p> 
      
      {/* Boutons de navigation */}
      <div className="slide-buttons">
        {/* Bouton pour passer à l'image précédente */}
        <button className="slide-image">
          <img src={Previous} alt="Flèche gauche" className={totalImages === 1 ? 'display-none' : "arrow"} onClick={handleClickPrevious}/>
        </button>
        
        {/* Bouton pour passer à l'image suivante */}
        <button className="slide-image">
          <img src={Next} alt="Flèche droite" className={totalImages === 1 ? 'display-none' : "arrow"} onClick={handleClickNext}/>
        </button>
      </div>
    </div>
  );
};

export default Slideshow;