import StarEmpty from '../assets/Rating-star-empty.png';
import Star from '../assets/Rating-star.png';

function Rating({rate}) {
    //Comportement :
     // Generating Stars
    const generateStars = () => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
          if (i < rate) {
              stars.push(<img key={i} src={Star} alt="Score de l'appartement" />);
          } else {
              stars.push(<img key={i} src={StarEmpty} alt="Score de l'appartement" />);
          }
      }
      return stars;
    }
    //Render
    return (
        <div className="rating">
            {generateStars()}
        </div>
    )
}

export default Rating ;