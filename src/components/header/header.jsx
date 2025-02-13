import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false); // Ferme le menu après un clic sur un lien
  };

  return (
    <div className="header">
      <div className="fixed-header">
        <div></div>

        <div className="content">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              {/* Bouton du menu burger */}
              <button
                className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
                type="button"
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
              >
                <div className="custom-toggler">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>

              {/* Menu */}
              <div
                className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/#presentation"
                      onClick={handleNavLinkClick}
                    >
                      Présentation
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/#projets"
                      onClick={handleNavLinkClick}
                    >
                      Projets
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/parcours"
                      onClick={handleNavLinkClick}
                    >
                      Mon Parcours
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/#contact"
                      onClick={handleNavLinkClick}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
