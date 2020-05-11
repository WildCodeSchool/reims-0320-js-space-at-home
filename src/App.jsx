import React from 'react';
import Media from 'react-media';
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
} from 'react-router-dom';

import PictureDay from './components/BirthdayPicture/PictureDay';
import './App.css';
import Instructions from './components/Instructions/Instructions';
import ButtonTop from './components/ButtonTop/ButtonTop';
import Footer from './components/Footer/Footer';
import SearchImages from './components/SearchBar/NasaAPI';
import Navbar from './components/Navbar/Navbar';
import Titre from './components/Titre';
import SearchBar from './components/SearchBar/SearchBar';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <>
      <Media query="(min-width: 851px)">
        {(matches) => {
          return matches ? (
            <div className="pageBlock">
              <Titre />
              <Instructions />
              <PictureDay />
              <SearchImages />
              <ButtonTop />
              <Footer />
            </div>
          ) : (
            <div className="pageBlock">
              <Router>
                <Navbar />
                <Switch>
                  <Route path="/Instructions">
                    <Instructions />
                  </Route>
                  <Route path="/BirthdayPicture">
                    <PictureDay />
                  </Route>
                  <Route path="/SearchBar">
                    <SearchImages />
                  </Route>
                  <Route path="/Contact">
                    <Contact />
                  </Route>
                  <Route exact path="/" component={PictureDay} />
                </Switch>
              </Router>
            </div>
          );
        }}
      </Media>
    </>
  );
}

export default App;
