import React from "react";
import "./header.css";

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
                    <a className="nav-link" href="/#presentation">
                      Présentation
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#projets">
                      Projets
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/parcours">
                      Mon Parcours
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#contact">
                      Contact
                    </a>
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
