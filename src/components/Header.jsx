import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/LOGO.svg';


function Header() {
  //State
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    setCurrentPage(window.location.href);
  }, [location]);

  //Render
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="logo-header" />
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/"  className={currentPage.endsWith('/') ? 'homepage-link' : 'link-none'}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about"  className={currentPage.endsWith('/about') ? 'page-about-link' : 'link-none'}>
              À Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;