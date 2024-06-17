import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
//Components
import Slideshow  from "../components/Slideshow " ;
import Title from '../components/Title';
import Location from '../components/Location';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse'
import Tag from "../components/Tag";

function AccommodationPage() {
  // state (data)
  const accommodationInfo = JSON.parse(localStorage.getItem("thePictures")) ;
  const pictureOfAccomodation = accommodationInfo.pictures;
  const tagOfAccomodation = accommodationInfo.tags;
  const location = useLocation();
  const navigate = useNavigate();
  const [collapse] = useState([
    {id: 1, title: 'Équipements', content: accommodationInfo.equipments},
    {id: 2, title: 'Description', content: accommodationInfo.description}
  ])
  //if Accommodation no id then Error
  useEffect (() => {
    if (!accommodationInfo.id || location.pathname !== `/fiche/${accommodationInfo.id}`) {
      navigate('/ErrorPage')
    }
  }, [location ,accommodationInfo.id ,navigate])
  //comportements
  
  //RENDER 
  return (
    <div>
      <nav className="carrousel-slide">
        <Slideshow pictures={pictureOfAccomodation} />
      </nav>
      <section className="information-section">
          <div className="information-accommodation">
              <div className="accommodation-owner-conteiner">
                <div className="presentation">
                    <Title title={accommodationInfo.title}/>
                    <Location location={accommodationInfo.location} />
                </div>
                <ul className="tag-list">
                    {tagOfAccomodation.map((tagName) => (
                        <Tag key={tagName} tag={tagName}/>
                    ))}
                </ul>
              </div>
              <div className="tag-rate-conteiner">
                <Rating rate={accommodationInfo.rating} />
                <Host hostName={accommodationInfo.host.name} profileHost={accommodationInfo.host.picture} />
              </div>
          </div>
          <div>
              <ul className="collapse">
                  {collapse.map((about) => (
                      <Collapse key={about.id} collapseInfo={about} id={accommodationInfo.id} />
                  ))}
              </ul>
          </div>
      </section>
    </div>
  );
};

export default AccommodationPage;

