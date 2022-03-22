import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import github from "../Assets/skills/tooling/icons8-github.svg";
import linkedin from "../Assets/skills/tooling/icons8-linkedin.svg";
import mail from "../Assets/skills/tooling/icons8-download-mail-100.png";
import cv from "../Assets/skills/tooling/icons8-cv-64 .png";

const Footer = () => {
  return (
    <div className={style.FooterContainer}>
      <div className={style.iconsContainer}>
        <a
          href="https://github.com/FernandoNaon"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github" className={style.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/fernando-naon/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="github" className={style.icon} />
        </a>
        <a
          href="mailto: fernandonaon@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={mail} alt="github" className={style.icon} />
        </a>
        <Link to="/resume">
          <img src={cv} alt="github" className={style.icon} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
