import React from 'react';
import './Navbar.css';
import {
  Link, BrowserRouter, Switch, Route,
} from 'react-router-dom';
import Planets from '../Planets/Planets';
import Satellites from '../Satelites/Satellites';
import SolarSystem from '../SolarSystem/SolarSystem';
import Event from '../Event/PictureDay';
// import Moons from '../Moons/Moons';

const Navbar = () => (
  <BrowserRouter>
    <header className="navbar_container">
      <ul>
        <li className="navbar_title">
          <Link to="/">Space at Home</Link>
        </li>
        <img className="navbar_logo" src="" alt="logo" />
      </ul>
      <nav>
        <ul>
          <li className="navbar_sections" href="#">
            <Link to="/Planets">Planets</Link>
          </li>
          <li className="navbar_sections" href="#">
            <Link to="/Satellites">Satellites</Link>
          </li>
          <li className="navbar_sections" href="#">
            <Link to="Moons">Moons</Link>
          </li>
          <li className="navbar_sections" href="#">
            <Link to="/Solar System">Solar System 2D</Link>
          </li>
          <li className="navbar_sections" href="#">
            <Link to="/Event">Event</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" />
        <Route path="/PlanetsJsx" component={Planets.jsx} />
        <Route path="/SatelittesJsx" component={Satellites.jsx} />
        <Route path="/SolarSystemJsx" component={SolarSystem.jsx} />
        {/* <Route path="/MoonsJsx" component={Moons.jsx} /> */}
        <Route path="/EventJsx" component={Event.jsx} />
      </Switch>
    </header>
  </BrowserRouter>
);


export default Navbar;
