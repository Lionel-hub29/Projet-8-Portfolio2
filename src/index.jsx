import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Router from "./Router.jsx";

// Composant pour gérer le scroll vers les ancres
function ScrollToAnchor() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Attendre que la page ait fini de se charger avant de scroller
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Délai pour garantir que l'élément est chargé avant de défiler
    }
  }, [hash]); // Ce useEffect se déclenche uniquement lorsque le hash change

  return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToAnchor />
    <Router />
  </BrowserRouter>
);
