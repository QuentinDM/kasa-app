// src/contexts/AccommodationContext.js
import React, { createContext, useState, useContext } from 'react';
import data from '../../data.json';  // Importation des données JSON

// Création du contexte
const AccommodationContext = createContext();

// Hook pour utiliser le contexte
export const useAccommodation = () => {//Hook personaliser pour utilisation du contexte dans les composants. 
  return useContext(AccommodationContext);
};

// Fournisseur de contextes
export const AccommodationProvider = ({ children }) => {
  const [accommodationInfo, setAccommodationInfo] = useState(data);

  return (
    <AccommodationContext.Provider value={{ accommodationInfo, setAccommodationInfo }}>
      {children}
    </AccommodationContext.Provider>
  );
};