import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Router from "./Router.jsx";

// Composant pour gérer le scroll vers les ancres
function ScrollToAnchor() {
  const { hash } = useLocation(); // Obtenir le hash de l'URL

  useEffect(() => {
    if (hash) {
      // Attendre que la page soit prête et l'élément accessible
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Petit délai pour être sûr que l'élément est présent
      }
    }
  }, [hash]); // Le useEffect se déclenche uniquement si le hash change

  return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToAnchor />
    <Router />
  </BrowserRouter>
);
