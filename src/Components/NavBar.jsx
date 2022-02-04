import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.navContainer}>
      <ul>
        <li className={style.title}>
          <Link to="/" className={style.noUnderline}>
            Home
          </Link>
        </li>
        <li className={style.title}>
          <Link to="/about" className={style.noUnderline}>
            About me
          </Link>
        </li>
        <li className={style.title}>
          <Link to="/skills" className={style.noUnderline}>
            Tech Skills
          </Link>
        </li>
        <li className={style.title}>
          <Link to="/projects" className={style.noUnderline}>
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
