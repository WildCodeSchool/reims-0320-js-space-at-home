import React, { useState } from 'react';
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
import PictureFavorite from './components/BirthdayPicture/PictureFavorite';


function App() {
  const [favorites, setFavorites] = useState([]);
  const addFavorite = (favorite) => {
    const transition = [];
    for (let i = 0; i < favorites.length; i++ ) {
      transition[i] = favorites[i].url;
    }
    console.log(transition);
    if (transition.indexOf(favorite.url) === -1) {
      setFavorites([...favorites, favorite]);
    }
  };
  return (
    <>
      <Media query="(min-width: 851px)">
        {(matches) => {
          return matches ? (
            <div className="pageBlock">
              <Titre />
              <Instructions />
              <PictureDay addToFavorite={addFavorite} />
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
                    <PictureDay addToFavorite={addFavorite} />
                  </Route>
                  <Route path="/SearchBar">
                    <SearchBar />
                  </Route>
                  <Route path="/PictureFavorite">
                    <PictureFavorite favorites={favorites} />
                  </Route>
                  <Route exact path="/">
                    <PictureDay addToFavorite={addFavorite} />
                  </Route>
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
