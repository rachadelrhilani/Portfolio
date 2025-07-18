import React, { useState, useEffect } from 'react';

const Services = ({ Servref }) => {
    // Utiliser un état pour contrôler la visibilité du profil dans la fenêtre
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const Serv = Servref.current;
    
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stopper l’observation
                }
            },
            { threshold: 0.030 }
        );
    
        if (Serv) {
            observer.observe(Serv);
        }
    
        return () => {
            if (Serv) {
                observer.unobserve(Serv);
            }
        };
    }, [Servref, isVisible]);
    
    return (
        <div className={`container services ${isVisible && 'animate__animated animate__zoomIn'}`} ref={Servref}>
            <h2 className="text-center">MES Services</h2>
            <div className="row section">
                {/* Card Front-End */}
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Front-End</h5>
                            <p className="card-text">
                                Création de sites web utilisant les dernières technologies telles que HTML, CSS, JavaScript, ainsi que des bibliothèques comme React.js, et des systèmes de gestion de contenu puissants tels que WordPress. Ces solutions permettent de concevoir des interfaces à la fois dynamiques, intuitives et adaptables aux besoins des utilisateurs
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

