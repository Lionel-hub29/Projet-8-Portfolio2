import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Router from "./Router.jsx";

// Composant pour gérer le scroll vers les ancres
function ScrollToAnchor() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/" && hash) {
      // Si nous sommes sur la page d'accueil et qu'il y a un hash, scrollons vers l'élément cible
      const element = document.querySelector(hash);
      if (element) {
        // Un léger délai avant de faire défiler vers l'élément (si la page a bien chargé)
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else if (hash && pathname !== "/") {
      // Si nous ne sommes pas sur la page d'accueil et qu'un hash est présent
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Délai pour laisser le temps au changement de page
    }
  }, [pathname, hash, navigate]);

  useEffect(() => {
    // Réinitialisation du scroll en cas de navigation vers la page d'accueil
    if (pathname !== "/" && !hash) {
      window.scrollTo(0, 0); // Remet le scroll au tout début de la page
    }
  }, [pathname, hash]);

  return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToAnchor />
    <Router />
  </BrowserRouter>
);
