/* eslint-disable import/no-extraneous-dependencies */
import "./NavBar.scss";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="background-nav">
      <div className="nav-position">
        <NavLink
          to="home"
          className={(nav) => (nav.isActive ? "nav-d-active" : undefined)}
        >
          <p>Accueil</p>
        </NavLink>
        <NavLink
          to="project"
          className={(nav) => (nav.isActive ? "nav-d-active" : undefined)}
        >
          <p>Project</p>
        </NavLink>
      </div>
    </nav>
  );
}
