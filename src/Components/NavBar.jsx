import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
const NavBar = () => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

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
            About
          </Link>
        </li>
        <li className={style.title}>
          <Link to="/skills" className={style.noUnderline}>
            Skills
          </Link>
        </li>
        <li className={style.title}>
          <Link to="/projects" className={style.noUnderline}>
            Projects
          </Link>
        </li>
        <li className={style.title}>
          <Link to="/playlist" className={style.noUnderline}>
            #$!@
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
