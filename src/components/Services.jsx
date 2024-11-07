import React, { useState,useEffect } from 'react';

const Services = ({ Servref }) => {
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

        // Observer l'élément référencé par Servref si celui-ci est défini
        if (Servref.current) {
            observer.observe(Servref.current);
        }

        // Nettoyage : arrêter l'observation lorsque le composant est démonté ou si Servref change
        return () => {
            if (Servref.current) {
                observer.unobserve(Servref.current);
            }
        };
    }, [Servref]); // Le hook s'active lorsque Profilref change
    return (
        <div className={`container services ${isVisible && 'animate__animated animate__bounceIn'}`} ref={Servref}>
            <h2 className="text-center">MES Services</h2>
            <div className="row section">
                {/* Card Front-End */}
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Front-End</h5>
                            <p className="card-text">
                                Développement d'interfaces utilisateur interactives et modernes
                                utilisant les dernières technologies telles que HTML, CSS, JavaScript,et des bibliothèques comme React.js.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card Back-End */}
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Back-End</h5>
                            <p className="card-text">
                                Création de systèmes robustes pour la gestion des données et de
                                la logique d'application en utilisant Laravel, un framework PHP performant,
                                avec des bases de données SQL pour une structure solide et évolutive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;

