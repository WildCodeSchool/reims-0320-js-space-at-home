import React from 'react';
import './Navbar.css';
import {
  Link, BrowserRouter, Switch, Route,
} from 'react-router-dom';
import Planets from '../Planets/Planets';
import Satellites from '../Satelites/Satellites';
import SolarSystem from '../SolarSystem/SolarSystem';
import Event from '../Event/PictureDay';
import Moons from '../Satelites/Moons';

const Navbar = () => (
  <BrowserRouter>
    <header>
      <nav className="navbar_container">
        <ul>
          <li className="navbar_title"><Link to="/">Space at Home</Link></li>
          <li className="navbar_sections"><Link to="/Planets">Planets</Link></li>
          <li className="navbar_sections"><Link to="/Satellites">Satellites</Link></li>
          <li className="navbar_sections"><Link to="/Moons">Moons</Link></li>
          <li className="navbar_sections"><Link to="/SolarSystem">Solar System</Link></li>
        </ul>
      </nav>
      <img className="navbar_logo" src="" alt="logo" />
    </header>
    <Switch>
      <Route exact path="/" component={Event} />
      <Route path="/Planets" component={Planets} />
      <Route path="/Satellites" component={Satellites} />
      <Route path="/SolarSystem" component={SolarSystem} />
      <Route path="/Moons" component={Moons} />
    </Switch>
  </BrowserRouter>
);

export default Navbar;
