import React, { useEffect, useState } from "react";
import 'animate.css'; // Importer la bibliothèque animate.css pour les animations CSS
import profileImage from '../images/Photo-Personnel.jpeg';
const Profil = ({ Profilref }) => {
    // Utiliser un état pour contrôler la visibilité du profil dans la fenêtre
    const [isVisible, setIsVisible] = useState(false);
    // Utilisation de useEffect pour observer la visibilité du composant
    useEffect(() => {
        const Profilcurrent = Profilref.current;
    
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Ne change l'état que si l'élément devient visible pour la première fois
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Arrête d'observer après la première intersection
                }
            },
            { threshold: 0.030 }
        );
    
        if (Profilcurrent) {
            observer.observe(Profilcurrent);
        }
    
        return () => {
            if (Profilcurrent) {
                observer.unobserve(Profilcurrent);
            }
        };
    }, [Profilref, isVisible]); // ajoute isVisible pour empêcher les changements multiples
    
    // Rendu du composant avec une animation conditionnelle
    return (
        <div
            className={`profile-container ${isVisible ? 'animate__animated animate__fadeInUp' : 'display:none'}`} // Ajoute les classes d'animation si l'élément est visible
            ref={Profilref} // Attacher la référence à l'élément pour l'observer
        >
            <div className="profile-title">
                <h2>Mon Profil</h2>
            </div>
            <div className="profile-content">
                <div className="profile-image">
                    <img src={profileImage} alt="Profile" /> {/* Affiche l'image du profil */}
                </div>
                <div className="profile-text">
                    <h2>EL RHILANI RACHAD</h2>
                    <p>
                        Titulaire d'un baccalauréat et d'un bac+2 en développement digital, option web full-stack. J'ai acquis des compétences solides en développement web et effectué un stage d'un mois dans la Province de Safi, ce qui m'a permis de renforcer mes connaissances en technologies front-end et back-end. Par ailleurs, j'ai également réalisé un stage de deux mois chez UniversalVisa à Agadir, au cours duquel j'ai développé le site MackensieConsulting, consolidant ainsi mon expertise en développement de sites web professionnels.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Profil;
