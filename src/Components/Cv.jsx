import React from "react";
import style from "./Cv.module.css";
import cv from "../Assets/Fernando Naon.jpeg";

const Cv = () => {
  return (
    <div className={style.cvContainer}>
      <img src={cv} alt="Cv" className={style.resume} />
    </div>
  );
};

export default Cv;
