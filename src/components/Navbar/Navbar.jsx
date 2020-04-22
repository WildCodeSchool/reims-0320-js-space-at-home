import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <header className="navbar_container">
    <a className="navbar_title" href="#">
      <p>Space at Home</p>
    </a>
    <nav>
      <a className="navbar_sections" href="#">
        <p>Planets</p>
      </a>
      <a className="navbar_sections" href="#">
        <p>Satellites</p>
      </a>
      <a className="navbar_sections" href="#">
        <p>Moons</p>
      </a>
      <a className="navbar_sections" href="#">
        <p>Solar System 3D</p>
      </a>
      <a className="navbar_sections" href="#">
        <p>Event</p>
      </a>
    </nav>
    <img className="navbar_logo" src="" alt="logo" />
  </header>
);


export default Navbar;
