import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './Navbar.css';
import Instructions from '../Instructions/Instructions';
import PictureDay from '../BirthdayPicture/PictureDay';

const NavBarNS = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbarBlock">
      <Router>
        <Navbar light expand="md">
          <NavbarBrand>
            <Link className="linkTitleNavBar" to="/">
              Born In Space
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link className="linkNavBar" to="/Instruction">
                    Instruction
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="linkNavBar" to="/BirthdayPicture">
                    Birthday Picture
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="linkNavBar" to="/SearchBar">
                    SearchBar
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="linkNavBar" to="/Contact">
                    Contact
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route path="/Instruction">
            <Instructions />
          </Route>
          <Route path="/BirthdayPicture">
            <PictureDay />
          </Route>
          <Route path="/SearchBar" />
          <Route path="/Contact" />
          <Route exact path="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default NavBarNS;
