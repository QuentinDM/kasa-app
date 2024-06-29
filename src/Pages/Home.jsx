import React from 'react';
import Banner from '../components/Banner'; 
import Card from '../components/Card'; 
import Image from '../assets/Photo-bord-de-mer-falaise.png'; 
import { Link } from 'react-router-dom'; 
import { useAccommodation } from '../components/Context/AccommodationContext'; 

function Home() {
  // state (data)
  const { accommodationInfo } = useAccommodation(); // Utilisation du hook useAccommodation pour obtenir les données d'hébergement

  // RENDER 
  return (
    <div>
      {/* Section de la bannière */}
      <section className='banner'>
        <h1>Chez vous, partout et ailleurs</h1> 
        <Banner images={Image} alt="Phote-bord-de-mer-falaise"/> 
      </section>
      
      {/* Section de la galerie d'hébergements */}
      <section className="gallery">
        <article>
          <ul className='cart'>
            {accommodationInfo.map((accommodation) => (
              <Link key={accommodation.id} to={`/fiche/${accommodation.id}`}>
                {/* Utilisation de Link pour naviguer vers la page de détails de chaque hébergement */}
                <Card cardInfo={accommodation} /> {/* Affichage du composant Card pour chaque hébergement */}
              </Link>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Home;