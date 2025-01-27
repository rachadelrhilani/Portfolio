import React, { useCallback } from 'react'; // Importation de React et du hook useCallback
import Particles from 'react-particles'; // Importation du composant Particles
import { loadSlim } from 'tsparticles-slim'; // Importation de la méthode pour charger une version légère de tsparticles

function ParticleNetwork() {
  // Définition d'une fonction de rappel pour initialiser les particules
  const particlesInit = useCallback(async (engine) => {
    // Charge le paquet tsparticles en utilisant la version slim
    await loadSlim(engine);
  }, []); // Le tableau de dépendances vide signifie que cette fonction n'a pas de dépendances

  return (
    <Particles
      className='Part' // Classe CSS pour le conteneur de particules
      init={particlesInit} // Passer la fonction d'initialisation
      options={{
        fullScreen: { enable: false },// Activer le mode plein écran pour les particules
        particles: {
          number: {
            value: 50, // Nombre de particules
            density: {
              enable: true, // Activer la densité
              value_area: 500, // Zone de densité
            },
          },
          links: {
            enable: true, // Activer les lignes entre les particules
            distance: 150, // Distance à laquelle les lignes sont tracées
            color: "#ffa500", // Couleur des lignes
            opacity: 0.8, // Opacité des lignes
            width: 1, // Largeur des lignes
          },
          move: {
            enable: true, // Activer le mouvement des particules
            speed: 2.5, // Vitesse de mouvement des particules
          },
          shape: {
            type: "", // Forme des particules
          },
          size: {
            value: { min: 3, max: 10 }, // Taille des particules
            random: true, // Taille aléatoire
          },
          opacity: {
            value: 0.8, // Opacité des particules
            random: true, // Opacité aléatoire
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: false, // Activer l'interaction au survol
              mode: "repulse", // Mode d'effet au survol (repousse les particules)
            },
            onClick: {
              enable: false, // Désactiver l'interaction au clic
            },
          },
        },
      }}
    />
  );
}

export default ParticleNetwork; // Exportation du composant ParticleNetwork
