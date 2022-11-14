/* eslint-disable */
import planet from '../planet.png';
import { NavLink } from 'react-router-dom';
import Profile from './Profile';

const Navbar = () => {
   

  return (
    <header>
      <img src={planet} alt="Logo" />
      <nav className="navbar">
        <ul className="nav__menu">
            <NavLink path="/profile" element={<Profile />}/>
        </ul>
    </nav>
    </header>
    
  )
}

export default Navbar