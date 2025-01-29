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
      // Si on n'est PAS sur la page d'accueil, on navigue d'abord vers "/"
      if (pathname !== "/") {
        navigate("/", { replace: true });
      }

      // Petit délai pour s'assurer que la page d'accueil a bien chargé avant de scroller
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Délai de 100ms
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
