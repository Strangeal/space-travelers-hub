import planet from "../planet.png";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <header>
    <nav className="navbar">
      <div className="nav__brand">
        <img src={planet} alt="Logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="nav__menu">
        <li>
          <NavLink to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/missionsPage">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
