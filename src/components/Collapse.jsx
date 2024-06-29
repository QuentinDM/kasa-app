import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Arrowup from '../assets/Arrow-up.png';

function Collapse({ collapseInfo, id }) {
  // État pour gérer l'ouverture/la fermeture du collapse
  const [open, setOpen] = useState(false);

  // Hook pour obtenir l'emplacement actuel (URL)
  const location = useLocation();

  // Fonction pour ouvrir/fermer le collapse
  const toggleCollapse = () => {
    setOpen(!open);
  };

  // Rendu
  return (
    <div>
      <section
        className={
          location.pathname === `/fiche/${id}`
            ? 'collapse-fiche'
            : `collapse-container ${open ? 'collapse-opened' : ''}`
        }
        onClick={toggleCollapse}
      >
        <h2 className="collapse-title">{collapseInfo.title}</h2>
        <img src={Arrowup} alt="Arrow" className={open ? 'open' : 'close'} />
      </section>

      <article
        className={
          location.pathname === `/fiche/${id}` && open
            ? 'collapse-text'
            : open
            ? 'collapse-article'
            : ''
        }
      >
        {location.pathname === '/about' ? (
          <p className={open ? '' : 'hidden'}>{collapseInfo.content}</p>
        ) : location.pathname === `/fiche/${id}` && collapseInfo.title === 'Équipements' ? (
          <ul className={open ? '' : 'hidden'}>
            {collapseInfo.content.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        ) : (
          <p className={open ? '' : 'hidden'}>{collapseInfo.content}</p>
        )}
      </article>
    </div>
  );
}

export default Collapse;