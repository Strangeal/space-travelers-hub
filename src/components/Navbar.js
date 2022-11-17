import { Link, NavLink } from 'react-router-dom';
import planet from '../planet.png';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <div className="nav__brand">
        <Link className="brand__link" to="/">
          <img src={planet} alt="Logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </Link>
      </div>
      <ul className="nav__menu">
        <li className="nav__item">
          <NavLink className="nav__link" to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/missionsPage">Missions</NavLink>
        </li>
        <li>
          |
          <NavLink className="nav__link" to="/profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
    <hr />
  </header>
);
export default Navbar;
