import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // important pour les styles
import htmlIcon from '../images/html.png';
import cssIcon from '../images/css-3.png';
import jsIcon from '../images/js.png';
import phpIcon from '../images/php.png';
import sqlIcon from '../images/sql.png';
import reactIcon from '../images/react.png';
import wordIcon from '../images/wordpress.png';
import laravelIcon from '../images/laravel.png';

const skillData = [
    { name: 'HTML', icon: htmlIcon, percentage: 90 },
    { name: 'CSS', icon: cssIcon, percentage: 85 },
    { name: 'JavaScript', icon: jsIcon, percentage: 80 },
    { name: 'PHP', icon: phpIcon, percentage: 75 },
    { name: 'WordPress', icon: wordIcon, percentage: 85 },
    { name: 'SQL', icon: sqlIcon, percentage: 70 },
    { name: 'React', icon: reactIcon, percentage: 85 },
    { name: 'Laravel', icon: laravelIcon, percentage: 80 },
];

// ✅ Composant pour animer le remplissage du cercle
const AnimatedProgressbar = ({ percentage, triggerAnimation }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (triggerAnimation) {
            let current = 0;
            const interval = setInterval(() => {
                current += 1;
                if (current >= percentage) {
                    current = percentage;
                    clearInterval(interval);
                }
                setValue(current);
            }, 20); // animation rapide

            return () => clearInterval(interval);
        }
    }, [percentage, triggerAnimation]);

    return (
        <CircularProgressbar
            value={value}
            text={`${value}%`}
            styles={buildStyles({
                textColor: '#333',
                pathColor: '#FFA500',
                trailColor: '#d6d6d6',
            })}
        />
    );
};

const Competences = ({ CompetenceRef }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const Competencecurrent = CompetenceRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.03 }
        );

        if (Competencecurrent) {
            observer.observe(Competencecurrent);
        }

        return () => {
            if (Competencecurrent) {
                observer.unobserve(Competencecurrent);
            }
        };
    }, [CompetenceRef, isVisible]);

    return (
        <div
            className={`competences-container ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`}
            ref={CompetenceRef}
        >
            <h2 className="competences-title">Compétences</h2>
            <div className="competences-grid">
                {skillData.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-icon">
                            <img src={skill.icon} alt={`${skill.name} icon`} />
                        </div>
                        <div className="skill-progress">
                            <AnimatedProgressbar
                                percentage={skill.percentage}
                                triggerAnimation={isVisible}
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
