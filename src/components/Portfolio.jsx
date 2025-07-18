import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css'; // la bibliothèque animate.css pour les animations CSS
/* images de Projet MackensieConsulting */
import home from '../Mackensie/acceuil1.png';
import Consulting from '../Mackensie/Consulting-en-ligne.png';
import Notremetier from '../Mackensie/Notre-metier.png';
import poli from '../Mackensie/poli.png';
/* images de Projet fill rouge */
import lending from '../fill rouge projet/lending.png';
import loginfillrouge from '../fill rouge projet/loginfillrouge.png';
import Mission from '../fill rouge projet/Mission.png';
import vote from '../fill rouge projet/vote.png';
import sommesnous from '../fill rouge projet/sommes-nous.png';
import event from '../fill rouge projet/event.jpeg';
import blog from '../fill rouge projet/blog.png';
/* images Projet de Gestion des mots de passe et guides utilisateurs */
import Acceuil from '../images/acceuil.jpg';
import Serveurs from '../images/Serveurs.jpg';
import login from '../images/login.jpg';
import resaux from '../images/résaux.jpg';
import sys from '../images/sys_information.jpg'
// Style de la fenêtre modale
Modal.setAppElement('#root'); // Assure l'accessibilité de la modale
const Portfolio = ({ Portref }) => {
    // Utiliser un état pour contrôler la visibilité du profil dans la fenêtre
    const [isVisible, setIsVisible] = useState(false);

    // Utilisation de useEffect pour observer la visibilité du composant
    useEffect(() => {
        const Port = Portref.current;
    
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stopper l’observation
                }
            },
            { threshold: 0.030 } // Animation déclenchée uniquement si 100% visible
        );
    
        if (Port) {
            observer.observe(Port);
        }
    
        return () => {
            if (Port) {
                observer.unobserve(Port);
            }
        };
    }, [Portref, isVisible]);
    

    // État pour la fenêtre modale
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    // Données de projets (exemple)
    const projects = [
        {
            id: 2,
            title: 'Projet de Gestion des mots de passe et guides utilisateurs',
            images: [Acceuil, login, Serveurs, resaux, sys],
            description: 'Le projet vise à développer une application de gestion de mots de passe permettant aux utilisateurs de stocker, organiser et sécuriser leurs identifiants de connexion et informations sensibles dans un seul endroit. Grâce à un système de cryptage avancé, les données restent protégées contre tout accès non autorisé,Technologies utilisées : HTML, CSS, Bootstrap 5, JS, PHP, Laravel.',
            githubLink: 'https://github.com/rachadelrhilani/Projet-de-gestion-des-mots-de-passe-et-guides-utilisateurs'
        },
        {
            id: 1,
            title: 'Projet de fill rouge (Front-end)',
            images: [lending, loginfillrouge, Mission, sommesnous, vote, event, blog],
            description: "Le projet Fil Rouge est conçu pour créer une plateforme innovante et interactive, visant à rassembler une communauté engagée autour d'objectifs communs. Grâce à une interface intuitive et des fonctionnalités variées, notre projet met en avant des valeurs de transparence, de participation et de collaboration. Il permet aux utilisateurs de se connecter, d'interagir, de s'informer, et de contribuer activement aux décisions importantes.. Technologies utilisées : HTML, CSS, Bootstrap 5,JavaScript, PHP.",
            githubLink: 'https://github.com/rachadelrhilani/Projet-fill-rouge-front-end-'
        }
        ,
        {
            id: 3,
            title: 'MackensieConsulting (WordPress)',
            images: [home, Consulting, Notremetier, poli],
            description: `MackensieConsulting : Plateforme de Consulting en Ligne

Le projet MackensieConsulting est un site web de consulting professionnel, conçu avec WordPress et entièrement adapté aux besoins des ministères, entreprises et investisseurs. Son objectif principal est de faciliter les échanges et les collaborations en offrant une solution moderne et accessible pour la prise de rendez-vous en ligne.

Grâce à l'intégration du plugin Bookly, le site permet :

La réservation simplifiée de rendez-vous consulting, avec des créneaux horaires adaptés.
Une gestion efficace des plannings pour les consultants et les utilisateurs.
Une expérience utilisateur fluide, alliant design intuitif et fonctionnalités performantes.
Ce projet met en avant mon expertise dans la création de sites web dynamiques, en combinant les possibilités puissantes de WordPress avec des solutions spécifiques telles que Bookly pour répondre aux besoins professionnels des acteurs du secteur public et privé.`,
            githubLink: 'https://mackensieconsulting.com/'
        }
    ];

    // Ouvrir la fenêtre modale pour un projet
    const openModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    };

    // Fermer la fenêtre modale
    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedProject(null);
    };

    // Paramètres pour le slider
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={`portfolio-container ${isVisible && 'animate__animated animate__fadeInLeft'}`} ref={Portref}>
            <h2>Mes Projets</h2>
            <div className="project-list">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project-item"
                        onClick={() => openModal(project)}
                    >
                        <img src={project.images[0]} alt={project.title} className="project-image" />
                        <div className="overlay">
                            <h3>{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fenêtre modale pour afficher les détails du projet */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Project Details"
                ariaHideApp={false}
            >
                {selectedProject && (
                    <div className="modal-content">
                        <h2>{selectedProject.title}</h2>
                        <Slider {...sliderSettings} className="slider">
                            {selectedProject.images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
                                </div>
                            ))}
                        </Slider>
                        <p className="description">{selectedProject.description}</p>
                        <a
                            href={selectedProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                        >
                            Voir le projet
                        </a>
                        <button onClick={closeModal} className="close-button">Fermer</button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Portfolio;
