import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image1 from "../assets/parallax/paie.webp";
import Image2 from "../assets/parallax/entreprise.jpg";
import Image3 from "../assets/parallax/coordinateur.jpg";
import Image4 from "../assets/parallax/resppaie.jpg";
import Image5 from "../assets/parallax/consultant.webp";
import Image6 from "../assets/parallax/chefprojet.jpg";
import "./parcours.css";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const images = [
  {
    img: Image1,
    description: "Gestionnaire de Paie",
    description2: "ADP-GSI",
    description3: "2006 - 2008",
  },

  {
    img: Image2,
    description: "Chef d'entreprise secteur alimentaire",
    description2: "2008-2011",
  },

  {
    img: Image3,
    description: "Coordinateur Paie",
    description2: "Celio* ",
    description3: "2011 - 2018",
  },

  {
    img: Image4,
    description: "Responsable Paie",
    description2: "Piriou",
    description3: "2020 - 2022",
  },

  {
    img: Image5,
    description: "Consultant Paie",
    description2: "Inter Mutuelle Assistance",
    description3: "2023",
  },

  {
    img: Image6,
    description: "Chef de Projet SIRH",
    description2: "Inter Mutuelle Assistance",
    description3: "2024",
  },
];

function Image({ src, description, description2, description3, id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="container">
      <div className="container-card">
        <div className="image-container" ref={ref}>
          <img src={src} alt={`Image ${id}`} />
        </div>
        <div className="description-card">
          <motion.h2 className="title-parcours" style={{ y }}>
            {description}
          </motion.h2>
          <motion.h3 style={{ y }}>{description2}</motion.h3>
          <motion.h3 style={{ y }}>{description3}</motion.h3>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.img}
          description={image.description}
          description2={image.description2}
          description3={image.description3}
          id={index + 1}
        />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
