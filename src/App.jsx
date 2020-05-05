import React from 'react';
import PictureDay from './components/BirthdayPicture/PictureDay';
import './App.css';
import Instructions from './components/Instructions/Instructions';
import ButtonTop from './components/ButtonTop/ButtonTop';
import NavBarMB from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SearchImages from './components/SearchBar/NasaAPI';
import Title from './components/Titre';


function App() {
  return (
    <>
      <div className="pageBlock">
        <NavBarMB />
        <Title />
        <Instructions />
        <PictureDay />
        <SearchImages />
        <ButtonTop />
        <Footer />
      </div>
    </>
  );
}

export default App;
