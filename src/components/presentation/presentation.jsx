import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./presentation.css";
import Computer from "../../../src/assets/images/computer1.jpg";

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="presentation bg-light " id="#introduction">
      <div className="bloc-img">
        <div className="intro-img-computer">
          <img src={Computer} alt="image page de script" />

          <div className="text text-center">
            <p className="mb-4 fs-1"> Lionel Bertrand </p>
            <p>Développeur web junior</p>
          </div>
        </div>
      </div>

      <div className="bg-light">
        <div className="text-title-about mt-3" id="presentation">
          <h1>Mon itinéraire</h1>
        </div>

        <div
          ref={textRef}
          className={`text-presentation ${isVisible ? "visible" : ""}`}
        >
          <p className="fade-in">
            Avec un début de carrière dans le domaine des ressources humaines,
            j'ai développé une expertise particulière dans la gestion de la
            paie, un domaine où rigueur et précision sont essentiels. Cette
            expérience m’a permis de maîtriser des processus clés tout en
            contribuant à l’efficacité des équipes RH.<br></br>
            Au fil de ma carrière, j'ai eu l'opportunité de gérer divers projets
            stratégiques, tels que le déploiement de nouveaux systèmes de
            gestion du temps et des activités (GTA), ainsi que la mise en place
            d'un portail RH destiné à améliorer l'expérience des collaborateurs
            et la fluidité des processus internes. Ces projets m'ont permis
            d'acquérir des compétences en conduite du changement, en gestion de
            projet et en coordination d'équipes pluridisciplinaires.<br></br>
            Mon parcours illustre mon engagement à optimiser les outils et les
            processus RH afin de répondre aux besoins des organisations tout en
            offrant un service de qualité aux collaborateurs.
          </p>
          <p className="fade-in">
            Dans le cadre de ma reconversion professionnelle, et pour
            approffondir ce que j'ai découvert pendant mes différents projets,
            j'ai souhaité m'orienter vers le développement web. Un secteur
            dynamique qui offre de nombreuses opportunités dans des domaines
            variés.<br></br>
            Je suis convaincu que cette nouvelle voie me permettra d'explorer
            des projets enrichissants et de contribuer activement à des projets
            innovants et structurants.{" "}
          </p>
          <p className="fade-in">
            <a href="#contact" className="lien-presentation">
              Si vous souhaitez échanger, obtenir mon cv, cliquez ici{" "}
            </a>
            <a href="#contact">
              <i className="fa-solid fa-paper-plane" title="Contactez-moi"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
