import React, { useEffect, useState } from "react";
import 'animate.css'; // Importer la bibliothèque animate.css pour les animations CSS

const Profil = ({ Profilref }) => {
    // Utiliser un état pour contrôler la visibilité du profil dans la fenêtre
    const [isVisible, setIsVisible] = useState(false);

    // Utilisation de useEffect pour observer la visibilité du composant
    useEffect(() => {
        // Créer un IntersectionObserver pour surveiller si l'élément est visible
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Mettre à jour l'état en fonction de la visibilité de l'élément
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 } // Le seuil à 50% signifie que l'animation s'active quand 50% du profil est visible
        );

        // Observer l'élément référencé par Profilref si celui-ci est défini
        if (Profilref.current) {
            observer.observe(Profilref.current);
        }

        // Nettoyage : arrêter l'observation lorsque le composant est démonté ou si Profilref change
        return () => {
            if (Profilref.current) {
                observer.unobserve(Profilref.current);
            }
        };
    }, [Profilref]); // Le hook s'active lorsque Profilref change

    // Rendu du composant avec une animation conditionnelle
    return (
        <div
            className={`profile-container ${isVisible ? 'animate__animated animate__bounceIn' : ''}`} // Ajoute les classes d'animation si l'élément est visible
            ref={Profilref} // Attacher la référence à l'élément pour l'observer
        >
            <div class="profile-title">
                <h2>Mon Profil</h2>
            </div>
            <div class="profile-content">
                <div class="profile-image">
                    <img src="./Photo-Personnel.jpeg" alt="Profile Picture" /> {/* Affiche l'image du profil */}
                </div>
                <div class="profile-text">
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
