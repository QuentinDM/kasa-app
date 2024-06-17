import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Arrowup from '../assets/Arrow-up.png';



function Collapse({collapseInfo, id}) {
    // state (data)
    const [open, setOpen] = useState(false);
    const location = useLocation();
   
    // Comportements
    const toggleCollapse = () => {
        setOpen(!open);
    };

    // RENDER 
    return (
        <div>
            <section className={location.pathname === `/fiche/${id}` ? `collapse-fiche` : `collapse-container ${open ? 'collapse-opened' : ''}`}  onClick={toggleCollapse}>
                <h2 className='collapse-title'>{collapseInfo.title}</h2> 
                <img src={Arrowup} alt="Arrow" className={open ? 'open' : 'close'}/>
            </section>
            <article className={location.pathname === `/fiche/${id}`  && open ? `collapse-text` : open ? 'collapse-article' : ''}>
                {location === 'http://localhost:3000/about' ? (
                    <p className={open ? '' : 'hidden'}>{collapseInfo.content}</p>
                ) : location.pathname === `/fiche/${id}` && collapseInfo.title === 'Équipements' ? (
                    <ul className={open ? '' : 'hidden'}>
                        {collapseInfo.content.map((equipment) => (//transform Object to Array
                            <li key={equipment}>{equipment}</li>
                        ))}
                    </ul> 
                ) : (
                    <p className={open ? '' : 'hidden'}>{collapseInfo.content}</p>   
                )}
            </article>
        </div>
    )
}

export default Collapse;