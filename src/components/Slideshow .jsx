import React, { useState } from 'react';
//ASSETS
import Next from '../assets/Arrow-right.png'
import Previous from '../assets/Arrow-left.png'

const Slideshow = ({ pictures }) => {
  //Sate
  let [numberStart, setNumberStart] = useState(1);
  const [index, setIndex] = useState(0);// Initialisez index à 0 pour accéder à la première image
  const [imageUrl, setImageUrl] = useState(pictures[0]);
  const totalImages = pictures.length;

  //Comportements
  const handleClickNext = () => {
    let newIndex = (index + 1) % totalImages;
    setIndex(newIndex);
    setImageUrl(pictures[newIndex]);
    setNumberStart(prevNumberStart => {
      if (prevNumberStart >= totalImages) {
        return 1;
      } else {
        return prevNumberStart + 1;
      }
    });
  };

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

  //Render
  return (
    <div className='slide'>
      <figure className='carrousel'>
            <img src={imageUrl} alt="apppartement" className='accomodation-picture' />
      </figure>
      
      <p className={totalImages === 1 ? 'display-none' :"footer-number"}>{numberStart}/{totalImages}</p> 
        <div className="slide-buttons">
          <button className="slide-image"><img src={Previous} alt="Arrow direction left" className={totalImages === 1 ? 'display-none' : "arrow"} onClick={handleClickPrevious}/></button>
          <button className="slide-image"><img src={Next} alt="Arrow direction right" className={totalImages === 1 ? 'display-none' : "arrow"} onClick={handleClickNext}/></button>
        </div>
    </div>
  );
};

export default Slideshow;
