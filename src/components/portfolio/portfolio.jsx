import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../portfolio/portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faGithub,
  faBootstrap,
  faReact,
  faNodeJs,
  faNeos,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Booki from "../../assets/images/booki.png";
import Bluel from "../../assets/images/bluel.png";
import Carducci from "../../assets/images/carducci.png";
import Psl from "../../assets/images/psl.png";
import Kasa from "../../assets/images/kasa.png";
import Grimoire from "../../assets/images/grimoire.png";
import Qwenta from "../../assets/images/Qwenta.png";
import Pres from "../../assets/images/pres.png";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const iconMapping = {
    HTML: faHtml5,
    CSS: faCss3Alt,
    Javascript: faJs,
    GitHub: faGithub,
    Bootstrap: faBootstrap,
    React: faReact,
    NodeJs: faNodeJs,
    Express: faJs,
    MongoDB: faDatabase,
    Notion: faNeos,
  };

  // Définir les projets et leur catégorie (front-end, back-end, etc.)
  const projects = [
    {
      title: "Booki",
      category: "front-end",
      description:
        "Créer la page d'accueil d'une agence de voyage en utilisant HTML et CSS. L’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
      imgSrc: Booki,
      tags: ["HTML", "CSS", "GitHub"],
      githubLink: "https://github.com/Lionel-hub29/Projet-2",
    },
    {
      title: "Sophie Bluel",
      category: "front-end",
      description:
        "Créer une page web dynamique avec JavaScript. Vous êtes un développeur front-end d’une équipe qui travaille sur la conception du site portfolio d’une architecte d’intérieur.",
      imgSrc: Bluel,
      tags: ["HTML", "CSS", "Javascript", "Express", "GitHub"],
      githubLink: "https://github.com/Lionel-hub29/Projet-3-Sophie-Bluel",
    },

    {
      title: "Nina Carducci",
      category: "front-end",
      description:
        "Optimiser le référencement d’un site, en améliorant sa performance et son accessibilité. Corriger des bugs de filtres et de navigation dans une modale",
      imgSrc: Carducci,
      tags: ["HTML", "CSS", "Javascript", "Express", "GitHub"],
      githubLink: "https://github.com/Lionel-hub29/Projet-4-Nina-Carducci",
    },
    {
      title: "Kasa",
      category: "front-end",
      description:
        "Implémenter le front-end d’une application en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive.",
      imgSrc: Kasa,
      tags: ["HTML", "CSS", "React", "Express", "GitHub"],
      githubLink: "https://github.com/Lionel-hub29/Projet_5_Kasa",
    },
    {
      title: "Mon Vieux Grimoire",
      category: "back-end",
      description:
        "Développer le back-end d'un site de notation de livres. Vous êtes développeur back-end et vous travaillez avec Kévin, un développeur front-end plus expérimenté que vous. ",
      imgSrc: Grimoire,
      tags: ["React", "NodeJs", "Express", "MongoDB", "GitHub"],
      githubLink: "https://github.com/Lionel-hub29/P6-Mon-vieux-Grimoire",
    },

    {
      title: "Qwenta",
      category: "projet",
      description:
        " Ce projet vous implique dans la planification du développement d'un site web.",
      imgSrc: Qwenta,
      tags: ["Notion"],
      githubLink: "https://github.com/Lionel-hub29/",
    },
    {
      title: "Portfolio",
      category: "front-end",
      description: "Création de votre propre portfolio de développeur web.",
      imgSrc: Pres,
      tags: ["React", "NodeJs", "GitHub", "Bootstrap"],
      githubLink: "https://github.com/Lionel-hub29/Projet-8-Portfolio",
    },
  ];

  // Filtrer les projets en fonction du type de catégorie
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <div className="project bg-body-tertiary">
      <div className="title-project">
        <h1>Projets</h1>
      </div>

      <div className="portfolio-text-formation m-5">
        <h5>Travaux effectués pendant la formation</h5>
      </div>

      <div className="mb-4 btn-filter">
        <div
          className="btn-group "
          role="group"
          aria-label="Filtres de projets"
        >
          <Button variant="dark" onClick={() => setFilter("all")}>
            Tous
          </Button>
          <Button variant="dark" onClick={() => setFilter("front-end")}>
            Front-End
          </Button>
          <Button variant="dark" onClick={() => setFilter("back-end")}>
            Back-End
          </Button>
          <Button variant="dark" onClick={() => setFilter("projet")}>
            Projets
          </Button>
        </div>
      </div>

      <div className="card-container">
        {filteredProjects.map((project, index) => (
          <div className="card-wrapper" key={index}>
            <div className="card-portfolio">
              <Card className="card-portfolio-unite">
                <Card.Img
                  variant="top"
                  className="card-img-top"
                  src={project.imgSrc}
                />
                <Card.Body>
                  <Card.Title className="title-project">
                    <h1>{project.title}</h1>
                  </Card.Title>
                  <Card.Text className="text-presentation-card">
                    {project.description}
                  </Card.Text>
                  <Card.Text>
                    <ul className="tags">
                      {project.tags.map((tag, i) => (
                        <li key={i}>
                          <FontAwesomeIcon icon={iconMapping[tag]} /> {tag}
                        </li>
                      ))}
                    </ul>
                  </Card.Text>
                  {project.githubLink && (
                    <Card.Text className="lien-github">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lien GitHub pour ce projet
                      </a>
                    </Card.Text>
                  )}
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>

      <div className="portfolio-text-projets m-5">
        <h5>Travaux sur différents projets</h5>
      </div>
      <div className="card-container">
        <div className="card-portfolio">
          <Card className="card-portfolio-unite">
            <Card.Img variant="top" src={Psl} />
            <Card.Body>
              <Card.Title>Plogastel Sport Loisir</Card.Title>
              <Card.Text>
                Créer le site web d'une association sportive.
              </Card.Text>
              <Card.Text>
                <ul className="tags">
                  <li>
                    <FontAwesomeIcon icon={faHtml5} /> HTML
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCss3Alt} /> CSS
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faReact} /> React
                  </li>
                  <li>Nodemailer</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
