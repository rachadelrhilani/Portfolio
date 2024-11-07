import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css'; // la bibliothèque animate.css pour les animations CSS
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
const Portfolio = ({Portref}) => {
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
            { threshold: 1 } // Le seuil à 50% signifie que l'animation s'active quand 50% du profil est visible
        );

        // Observer l'élément référencé par Portref si celui-ci est défini
        if (Portref.current) {
            observer.observe(Portref.current);
        }

        // Nettoyage : arrêter l'observation lorsque le composant est démonté ou si Portref change
        return () => {
            if (Portref.current) {
                observer.unobserve(Portref.current);
            }
        };
    }, [Portref]); // Le hook s'active lorsque Profilref change
  
    // État pour la fenêtre modale
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    // Données de projets (exemple)
    const projects = [
        {
            id: 2,
            title: 'Projet de Gestion des mots de passe et guides utilisateurs',
            images: [Acceuil,login,Serveurs,resaux,sys],
            description: 'Le projet vise à développer une application de gestion de mots de passe permettant aux utilisateurs de stocker, organiser et sécuriser leurs identifiants de connexion et informations sensibles dans un seul endroit. Grâce à un système de cryptage avancé, les données restent protégées contre tout accès non autorisé,Technologies utilisées : HTML, CSS, Bootstrap 5, JS, PHP, Laravel.',
            githubLink: 'https://github.com/rachadelrhilani/Projet-de-gestion-des-mots-de-passe-et-guides-utilisateurs'
        },
        {
            id: 1,
            title: 'Projet de fill rouge (Front-end)',
            images: [lending,loginfillrouge,Mission,sommesnous,vote,event,blog],
            description: "Le projet Fil Rouge est conçu pour créer une plateforme innovante et interactive, visant à rassembler une communauté engagée autour d'objectifs communs. Grâce à une interface intuitive et des fonctionnalités variées, notre projet met en avant des valeurs de transparence, de participation et de collaboration. Il permet aux utilisateurs de se connecter, d'interagir, de s'informer, et de contribuer activement aux décisions importantes.. Technologies utilisées : HTML, CSS, Bootstrap 5,JavaScript, PHP.",
            githubLink: 'https://github.com/rachadelrhilani/Projet-fill-rouge-front-end-'
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
        <div className={`portfolio-container ${isVisible && 'animate__animated animate__fadeIn'}`} ref={Portref}>
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
                            Voir le code source sur GitHub
                        </a>
                        <button onClick={closeModal} className="close-button">Fermer</button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Portfolio;
