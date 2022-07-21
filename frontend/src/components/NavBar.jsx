/* eslint-disable import/no-extraneous-dependencies */
import "./NavBar.scss";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="background-nav">
      <div className="nav-position">
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-d-active" : undefined)}
        >
          <p>Accueil</p>
        </NavLink>
        <NavLink
          to="/project"
          className={(nav) => (nav.isActive ? "nav-d-active" : undefined)}
        >
          <p>Projet</p>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-d-active" : undefined)}
        >
          <p>Contact</p>
        </NavLink>
      </div>
    </nav>
  );
}
