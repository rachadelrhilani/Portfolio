import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = ( props ) => {
    // Fonction pour défiler jusqu'à la section donnée
    const scrollToSection = (ref,event) => {
        event.preventDefault();
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid container-md container-lg">
                    <a className="navbar-brand" href="#"><img src="./Portfolio.png" className="img-fluid logo" alt="Logo..." /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" onClick={(e) => scrollToSection(props.headerRef,e)} href="#">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={(e) => scrollToSection(props.Profilref,e)} href="#">Profil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={(e) => scrollToSection(props.CompetenceRef,e)} href="#">Compétences</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={(e) => scrollToSection(props.Servref,e)} href="#">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={(e) => scrollToSection(props.Portref,e)} href="#">Portfolio</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" onClick={(e) => scrollToSection(props.Contactref,e)} href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;