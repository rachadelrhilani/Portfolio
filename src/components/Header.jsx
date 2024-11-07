import React from "react";
import { ReactTyped } from "react-typed";

const Header = ({ headerRef }) => {
   return (
      <div>
         {/* Section Header avec la référence */}
         <div className="header-wraper" ref={ headerRef }>
            <div className="main-info">
               <h1>Web Full-Stack Développeur</h1>
               <ReactTyped className="typed-text" strings={["Front-end Développeur", "back-end Développeur"]}
                  typeSpeed={35}
                  backSpeed={60}
                  loop
               />
               <a href="https://github.com/rachadelrhilani" className="github btn btn-primary">Mon github</a>
            </div>
         </div>
      </div>
   )
}
export default Header;