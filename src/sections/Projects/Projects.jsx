import React from "react";
import styles from "./ProjectsStyles.module.css";
import benzo from "../../assets/benzo-logo.png";
import hotelPeters from "../../assets/hotel-peters-logo.png";
import morteus from "../../assets/morteus-logo.png";

import ProjectsCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Proyectos</h1>
      <div className={styles.projectsContainer}>
        <ProjectsCard
          img={benzo}
          link={"https://github.com/Cesar-mendozaa/benzo"}
          h3={"Benzo"}
          p={"Sistema de apartados"}
        />
        <ProjectsCard
          img={hotelPeters}
          link={"https://github.com/Cesar-mendozaa/PetersHotelSistema"}
          h3={"Hotel Peters"}
          p={"Sistema de apartados"}
        />
        <ProjectsCard
          img={morteus}
          link={"https://github.com/Cesar-mendozaa/Morteus"}
          h3={"Morteus"}
          p={"Videojuego de combate"}
        />
      </div>
    </section>
  );
}

export default Projects;
