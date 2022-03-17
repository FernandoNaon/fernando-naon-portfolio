import React from "react";
import ControlledCarousel from "./ControlledCarousel";
import style from "./Projects.module.css";
import recipe1 from "../Assets/projects/recipe1.png";
import recipe2 from "../Assets/projects/recipe2.png";
import recipe3 from "../Assets/projects/recipe3.png";
import groupProj1 from "../Assets/projects/groupProj1.png";
import groupProj2 from "../Assets/projects/groupProj2.png";
import groupProj3 from "../Assets/projects/groupProj3.png";

const Projects = () => {
  return (
    <div className={style.projectsContainer}>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.carousel}>
            <ControlledCarousel img1={recipe1} img2={recipe2} img3={recipe3} />
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
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.carousel}>
            <ControlledCarousel
              img1={groupProj1}
              img2={groupProj2}
              img3={groupProj3}
            />
          </div>
          <div className={style.title}>
            <h3>A Sala Llena</h3>
          </div>
          <div className={style.description}>
            <p>
              Full-Stack app in where we used the scrum project management
              methodology with weekly sprints. It's a last minute ticket sales
              app for theaters, with a dynamic discount based on time,
            </p>
          </div>
          <div className={style.linksContainer}>
            <a
              className={style.link}
              href="https://github.com/FernandoNaon/front-groupProj"
              target="_blank"
              rel="noreferrer"
            >
              Ropository
            </a>
            <a
              className={style.link}
              href="https://front-pg.vercel.app/"
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
