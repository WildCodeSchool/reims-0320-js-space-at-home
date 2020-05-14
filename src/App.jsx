import React, { useState } from 'react';
import Media from 'react-media';
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
  Link,
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
    const transition = favorites.map((favo) => favo.url);
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
              <Router>
                <Switch>
                  <Route exact path="/">
                    <Instructions />
                    <PictureDay addToFavorite={addFavorite} />
                    <div className="FavRouteDiv">
                      <Link to="/PictureFavorite" className="FavRoute">
                        Go to my favorite gallery
                      </Link>
                    </div>
                    <SearchImages />
                  </Route>
                  <Route path="/PictureFavorite">
                    <div className="backRouteDiv">
                      <Link to="/" className="backRoute">
                        Back
                      </Link>
                    </div>
                    <PictureFavorite favorites={favorites} />
                  </Route>
                </Switch>
              </Router>
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
                  <Route path="/SearchBar">
                    <SearchImages />
                  </Route>
                  <Route path="/PictureFavorite">
                    <PictureFavorite favorites={favorites} />
                  </Route>
                  <Route path="/Contact">
                    <Contact />
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
