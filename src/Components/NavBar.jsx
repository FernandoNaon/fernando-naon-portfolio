import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.navContainer}>
      <Link to="/" className={style.noUnderline}>
        <h4 className={style.title}>Home</h4>
      </Link>
      <Link to="/about" className={style.noUnderline}>
        <h4 className={style.title}>About me</h4>
      </Link>
      <Link to="/skills" className={style.noUnderline}>
        <h4 className={style.title}>Tech Skills</h4>
      </Link>
      <Link to="/projects" className={style.noUnderline}>
        <h4 className={style.title}>Projects</h4>
      </Link>
    </div>
  );
};

export default NavBar;
