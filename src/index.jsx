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
      // Si on est déjà sur la bonne page (par exemple, la page d'accueil), on scrolle directement
      if (pathname === "/") {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Si on n'est PAS sur la page d'accueil, on navigue vers la page avec l'ancre
        // Utilisation de `navigate` avec le `hash` dans l'URL
        navigate(`${pathname}${hash}`, { replace: true });
      }
    }
  }, [hash, pathname, navigate]);

  return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToAnchor />
    <Router />
  </BrowserRouter>
);
