import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import htmlIcon from '../images/html.png';
import cssIcon from '../images/css-3.png';
import jsIcon from '../images/js.png';
import phpIcon from '../images/php.png';
import sqlIcon from '../images/sql.png';
import reactIcon from '../images/react.png';
import laravelIcon from '../images/laravel.png';
const skillData = [
    { name: 'HTML', icon: htmlIcon, percentage: 90 },
    { name: 'CSS', icon: cssIcon, percentage: 85 },
    { name: 'JavaScript', icon: jsIcon, percentage: 80 },
    { name: 'PHP', icon: phpIcon, percentage: 75 },
    { name: 'SQL', icon: sqlIcon, percentage: 70 },
    { name: 'React', icon: reactIcon, percentage: 85 },
    { name: 'Laravel', icon: laravelIcon, percentage: 80 },
];
const Competences = ({CompetenceRef}) => {
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
        if (CompetenceRef.current) {
            observer.observe(CompetenceRef.current);
        }

        // Nettoyage : arrêter l'observation lorsque le composant est démonté ou si CompetenceRef change
        return () => {
            if (CompetenceRef.current) {
                observer.unobserve(CompetenceRef.current);
            }
        };
    }, [CompetenceRef]); // Le hook s'active lorsque Profilref change

    return (
        <div className={`competences-container ${isVisible ? 'animate__animated animate__fadeIn' : ''}`} 
        ref={CompetenceRef} // Attacher la référence à l'élément pour l'observer
        >
            <h2 className="competences-title">Compétences</h2>
            <div className="competences-grid">
                {skillData.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-icon">
                            <img src={skill.icon} alt={`${skill.name} icon`} />
                        </div>
                        <div className="skill-progress">
                            <CircularProgressbar
                                value={skill.percentage}
                                text={`${skill.percentage}%`}
                                styles={buildStyles({
                                    textColor: '#333',
                                    pathColor: '#FFA500',
                                    trailColor: '#d6d6d6',
                                })}
                            />
                        </div>
                        <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Competences;