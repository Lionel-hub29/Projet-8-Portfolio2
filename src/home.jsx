import React from "react";
import Introduction from "./components/presentation/presentation";
import Header from "./components/header/header";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact.jsx";
function Home() {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Introduction />
      </div>
      <div id="projets" className="level-projet">
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
