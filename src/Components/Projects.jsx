import React from "react";
import ControlledCarousel from "./ControlledCarousel";
import style from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={style.projectsContainer}>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.carousel}>
            <ControlledCarousel />
          </div>
          <div className={style.title}>
            <h3>Recipedia</h3>
          </div>
          <div className={style.description}>
            <p>
              Recipedia is a full-stack Single Page Application developed as
              part of a 3-week challenge at Henry Bootcamp.
            </p>
          </div>
          <div className={style.linksContainer}>
            <a
              className={style.link}
              href="https://github.com/FernandoNaon/recipedia-app"
              target="_blank"
              rel="noreferrer"
            >
              Ropository
            </a>
            <a
              className={style.link}
              href="https://recipedia-frontend.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
