import './App.css';
import React, { useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ParticleNetwork from "./components/Particles.jsx";
import Competences from './components/Competences.jsx';
import Portfolio from './components/Portfolio.jsx';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Profil from './components/Profil.jsx';
import ContactFooter from './components/Contact.jsx';
import Services from './components/Services.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  // Créer une référence pour le composant "header-wraper"
  const headerRef = useRef(null);
  // Créer une référence pour le composant "profil"
  const ProfilRef = useRef(null);
  // Créer une référence pour le composant "Competences"
  const CompetenceRef = useRef(null);
   // Créer une référence pour le composant "Portref"
   const Portref = useRef(null);
  // Créer une référence pour le composant "Servref"
  const Servref = useRef(null);
  // Créer une référence pour le composant "Contact"
  const form = useRef();
  return (
    <div>
      <ParticleNetwork/>
      {/* Passer la référence au composant Navbar */}
      <Navbar headerRef={headerRef} Profilref={ProfilRef} CompetenceRef={CompetenceRef} Portref={Portref} Servref={Servref} Contactref={form}/>
      <Header headerRef={headerRef}/>
      <Profil Profilref={ProfilRef}/>
      <Competences CompetenceRef={CompetenceRef}/>
      <Services Servref={Servref}/>
      <Portfolio Portref={Portref}/>
      <ContactFooter form={form}/>
    </div>
  );
}

export default App;
