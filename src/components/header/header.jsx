import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="fixed-header">
        <div></div>

        <div className="content">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              {/* Bouton du menu burger */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Menu */}
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/#presentation">
                      Présentation
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/#projets">
                      Projets
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/parcours">
                      Mon Parcours
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/#contact">
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
