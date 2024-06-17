import React from 'react';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import '../style/App.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import AccommodationPage from '../Pages/AccommodationPage';
import ErrorPage from '../Pages/ErrorPage'
import { AccommodationProvider } from '../components/Context/AccommodationContext';// Partage des donnees a tout les composants 


function App() {
  return (
    <AccommodationProvider>
    <Router>
      <div className='main'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/fiche/:id' element={<AccommodationPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </AccommodationProvider>
  );
};
export default App;
