import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Router from "./Router.jsx";

// Composant pour gérer le scroll vers les ancres uniquement sur la même page
function ScrollToAnchor() {
  const { hash } = useLocation();

  useEffect(() => {
    // Si un hash est présent dans l'URL, on scrolle vers l'élément correspondant
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Défilement vers l'élément ciblé
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // On attend 100ms pour être sûr que l'élément soit bien rendu
      }
    }
  }, [hash]); // Le useEffect se déclenche à chaque changement de hash dans l'URL

  return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToAnchor />
    <Router />
  </BrowserRouter>
);
