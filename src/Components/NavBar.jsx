import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
const NavBar = () => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <div className={style.navContainer}>
      {/* <ul>
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
        <li className={style.title}>
          <Link to="/playlist" className={style.noUnderline}>
            #$!@
          </Link>
        </li>
      </ul> */}

      <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="1" href="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" href="/about">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" href="/skills">
            Skills
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="4" href="/projects">
            projects
          </Nav.Link>
          <Nav.Item>
            <Nav.Link eventKey="5" href="/playlist">
              #$!@
            </Nav.Link>
          </Nav.Item>
        </Nav.Item>
        {/* <NavDropdown title="Dropdown" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.5">
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </div>
  );
};

export default NavBar;
