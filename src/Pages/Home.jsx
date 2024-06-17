import React from 'react';
import Banner from '../components/Banner'; 
import Card from '../components/Card';
import Image from '../assets/Photo-bord-de-mer-falaise.png';
import { Link } from 'react-router-dom';
import { useAccommodation } from '../components/Context/AccommodationContext';

function Home() {
  // state (data)
  const {accommodationInfo} = useAccommodation();
  //comportements
  //RENDER 
  return (
    <div>
       <section className='banner'>
            <h1>Chez vous, partout et ailleurs</h1>
            <Banner images={Image} alt="Phote-bord-de-mer-falaise"/>
        </section>
      
      <section className="gallery">
                <article>
                    <ul className='cart'>{accommodationInfo.map((accommodation) => (
                        <Link key={accommodation.id} to={`/fiche/${accommodation.id}`}>
                          <Card  cardInfo={accommodation} />
                        </Link>
                    ))}</ul>
                </article>
          </section>
    </div>
  );
};

export default Home;