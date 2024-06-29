import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
//Components
import Slideshow  from "../components/Slideshow " ;
import Title from '../components/Title';
import Location from '../components/Location';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse'
import Tag from "../components/Tag";

function AccommodationPage() {
  // State (données)
  const accommodationInfo = JSON.parse(localStorage.getItem("thePictures")); // Récupération des informations d'hébergement depuis le localStorage
  const pictureOfAccomodation = accommodationInfo.pictures; // Tableau des images de l'hébergement
  const tagOfAccomodation = accommodationInfo.tags; // Tableau des tags de l'hébergement
  const { id } = useParams(); // Permet l'extraction dynamique de l'ID à partir de l'URL
  const location = useLocation(); // Récupération de l'URL actuelle avec useLocation
  const navigate = useNavigate(); // Fonction de navigation pour rediriger l'utilisateur
  const [collapse] = useState([
    { id: 1, title: 'Équipements', content: accommodationInfo.equipments },
    { id: 2, title: 'Description', content: accommodationInfo.description }
  ]);

  // Vérification de l'existence de l'identifiant de l'hébergement et de la correspondance avec l'URL
  useEffect(() => {//La fonction de rappel passée sera exécutée après chaque rendu et chaque mise à jour de l'état ou des props
    if (accommodationInfo.id !== id || location.pathname !== `/fiche/${id}`) {
      navigate('/ErrorPage'); // Rediriger vers la page d'erreur si les IDs ne correspondent pas
    }
  }, [id, accommodationInfo.id, location.pathname, navigate]);//Le tableau de dépendances, valeurs externes sur lesquelles cette fonction de rappel dépend. useEffect s'exécutera à nouveau uniquement si l'une de ces valeurs change. Cela garantit que la redirection est correctement gérée lorsque les id sont mis à jour.

  // Rendu du composant
  return (
    <div>
      {/* Section de la barre de navigation */}
      <nav className="carrousel-slide">
        <Slideshow pictures={pictureOfAccomodation} /> {/* Composant Slideshow pour afficher les images */}
      </nav>

      {/* Section d'information sur l'hébergement */}
      <section className="information-section">
        <div className="information-accommodation">
          <div className="accommodation-owner-container">
            {/* Présentation de l'hébergement */}
            <div className="presentation">
              <Title title={accommodationInfo.title} /> {/* Affichage du titre de l'hébergement */}
              <Location location={accommodationInfo.location} /> {/* Affichage de l'emplacement de l'hébergement */}
            </div>

            {/* Liste des tags associés à l'hébergement */}
            <ul className="tag-list">
              {tagOfAccomodation.map((tagName) => (
                <Tag key={tagName} tag={tagName} /> // Affichage de chaque tag dans la liste
              ))}
            </ul>
          </div>

          {/* Section du propriétaire et du taux */}
          <div className="tag-rate-container">
            <Rating rate={accommodationInfo.rating} /> {/* Affichage du taux de l'hébergement */}
            <Host hostName={accommodationInfo.host.name} profileHost={accommodationInfo.host.picture} /> {/* Affichage du nom et de l'image de l'hôte */}
          </div>
        </div>

        {/* Section des collapses (dépliés) */}
        <div>
          <ul className="collapse">
            {collapse.map((about) => (
              <Collapse key={about.id} collapseInfo={about} id={accommodationInfo.id} /> // Affichage de chaque collapse avec les informations appropriées
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AccommodationPage;

