import React from 'react';
import PictureDay from './components/BirthdayPicture/PictureDay';
import './App.css';
import Instructions from './components/Instructions/Instructions';
import ButtonTop from './components/ButtonTop/ButtonTop';
import Footer from './components/Footer/Footer';
import SearchImages from './components/SearchBar/NasaAPI';


function App() {
  return (
    <>
      <div className="pageBlock">
        <Instructions />
        <PictureDay />
      </div>
      <div>
        <SearchImages />
        <ButtonTop />
        <Footer />
      </div>
    </>
  );
}

export default App;
