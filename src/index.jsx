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
    if (hash) {
      // Si nous avons un hash, nous naviguons vers cet élément
      const element = document.querySelector(hash);
      if (element) {
        // Scroll vers l'élément avec un défilement fluide
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]); // D'autres mises à jour de `pathname` ou `hash` déclencheront un scroll

  useEffect(() => {
    if (pathname === "/" && hash) {
      // S'il s'agit de la page d'accueil et qu'il y a un hash dans l'URL,
      // nous scrollerons vers l'élément approprié.
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
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
