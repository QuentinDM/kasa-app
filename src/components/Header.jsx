import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/LOGO.svg';


function Header() {
  //State
  // Hook pour obtenir l'emplacement actuel (URL)
  const location = useLocation();
  
  //Render
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="logo-header" />
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/"  className={location.pathname === "/" ? 'homepage-link' : 'link-none'}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about"  className={location.pathname ==='/about' ? 'page-about-link' : 'link-none'}>
              À Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;