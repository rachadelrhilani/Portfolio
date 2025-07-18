import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import portfolioImage from '../images/Portfolio.png';
const Navbar = (props) => {
    // Fonction pour défiler jusqu'à la section donnée
    const scrollToSection = (ref, event) => {
        event.preventDefault();
        window.scrollTo({
            top: ref.current.offsetTop - 80, // Décale de 80px vers le haut
            behavior: 'smooth',
        });                
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid container-md container-lg">
                    <a className="navbar-brand" href="/">
                        <img src={portfolioImage} className="img-fluid logo" alt="Logo"/>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={(e) => scrollToSection(props.headerRef, e)}>Accueil</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={(e) => scrollToSection(props.Profilref, e)}>Profil</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={(e) => scrollToSection(props.CompetenceRef, e)}>Compétences</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={(e) => scrollToSection(props.Servref, e)}>Service</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={(e) => scrollToSection(props.Portref, e)}>Portfolio</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={(e) => scrollToSection(props.Contactref, e)}>Contact</button>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}
export default Navbar;