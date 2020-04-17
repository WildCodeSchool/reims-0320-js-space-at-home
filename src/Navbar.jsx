import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <header className="navbar-container">
    <li className="navbar-title">
      <a className="title" href="#">
        Space at Home
      </a>
    </li>
    <nav>
      <ul>
        <li>
          <a className="sections" href="#">
            Planets
          </a>
        </li>
        <li>
          <a className="sections" href="#">
            Satellites
          </a>
        </li>
        <li>
          <a className="sections" href="#">
            Moons
          </a>
        </li>
      </ul>
    </nav>
    <img className="navbar-logo" src="" alt="logo" />
  </header>
);


export default Navbar;
