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
    }
  }, [pathname, hash]); // Déclenchement uniquement si le pathname ou le hash change

  useEffect(() => {
    if (pathname !== "/" && hash) {
      // Si le hash est présent et qu'on n'est pas sur la page d'accueil, on navigue d'abord vers "/"
      navigate("/", { replace: true });
    }
  }, [pathname, hash, navigate]);

  return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToAnchor />
    <Router />
  </BrowserRouter>
);
