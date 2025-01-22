import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Parcours from "./screens/parcours";
import { routes } from "./routes";
import Header from "./components/header/header";
function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.presentation} element={<Home />} />
        <Route path={routes.projet} element={<Home />} />
        <Route path={routes.parcours} element={<Parcours />} />
        <Route path={routes.contact} element={<Home />} />
      </Routes>
    </>
  );
}

export default Router;
