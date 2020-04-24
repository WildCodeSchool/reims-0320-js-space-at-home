import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import Satcom from './Satcom';
import Hubble from './Hubble';
import Sputnik1 from './Sputnik1';
import Explorer1 from './Explorer1';
import SpaceStation from './SpaceStation';
import './Satellites.css';

class Satellites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="satellitesSection">
          <ul className="satellitesNavbar">
            <li>
              <Link to="/Hubble">Hubble</Link>
            </li>
            <li>
              <Link to="/SpaceStation">ISS</Link>
            </li>
            <li>
              <Link to="/Sputnik1">Sputnik 1</Link>
            </li>
            <li>
              <Link to="/Explorer1">Explorer 1</Link>
            </li>
            <li>
              <Link to="/Satcom">Satcom</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/Hubble" component={Hubble} />
          <Route path="/SpaceStation" component={SpaceStation} />
          <Route path="/Sputnik1" component={Sputnik1} />
          <Route path="/Explorer1" component={Explorer1} />
          <Route path="/Satcom" component={Satcom} />
        </Switch>
      </Router>
    )
  }
}

export default Satellites;
