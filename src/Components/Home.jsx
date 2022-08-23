import React from "react";
import style from "./Home.module.css";
import profilePic from "../Assets/IMG_6597.JPG";

// import profilePic from "../Assets/skills/tooling/portfolio.png";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.left}>
        <h1>Hi there, I’m Fernando.</h1>
        <h2>Fullstack web developer</h2>
      </div>
      <div className={style.right}>
        <img src={profilePic} alt="profilePicture" className={style.image} />
      </div>
    </div>
  );
};

export default Home;
