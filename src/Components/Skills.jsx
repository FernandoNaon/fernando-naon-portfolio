import React from "react";
import style from "./Skills.module.css";
import html from "../Assets/skills/frontend/html5.svg";
import css from "../Assets/skills/frontend/css3.svg";
import js from "../Assets/skills/frontend/javascript.svg";
import react from "../Assets/skills/frontend/react.svg";
import redux from "../Assets/skills/frontend/redux.svg";
import node from "../Assets/skills/backend/nodejs.svg";
import express from "../Assets/skills/backend/expressjs-ar21.svg";
import postgres from "../Assets/skills/backend/postgresql-vertical.svg";
import sequelize from "../Assets/skills/backend/sequelizejs-ar21.svg";
import mongo from "../Assets/skills/backend/mongodb.svg";
import firebase from "../Assets/skills/backend/firebase.svg";

const Skills = () => {
  return (
    <div className={style.skillsContainer}>
      <div className={style.techSkills}>
        <div className={style.cardContainer}>
          <div className={style.card}>
            <h1 className={style.title}>FrontEnd</h1>
            <div className={style.iconsContainer}>
              <img src={html} alt="html" className={style.icon} />
              <img src={css} alt="css" className={style.icon} />
              <img src={js} alt="js" className={style.icon} />
              <img src={react} alt="react" className={style.icon} />
              <img src={redux} alt="redux" className={style.icon} />
            </div>
          </div>
          <div className={style.card}>
            <h1 className={style.title}>BackEnd</h1>
            <div className={style.iconsContainer}>
              <img src={node} alt="node" className={style.icon} />
              <img src={express} alt="express" className={style.icon} />
            </div>
          </div>
          <div className={style.card}>
            <h1 className={style.title}>Data Base</h1>
            <div className={style.iconsContainer}>
              <img src={postgres} alt="posgresSQL" className={style.icon} />
              <img src={sequelize} alt="sequelize" className={style.icon} />
              <img src={mongo} alt="mongoDB" className={style.icon} />
              <img src={firebase} alt="firebase" className={style.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
