import React from 'react';
import PictureDay from './components/BirthdayPicture/PictureDay';
import './App.css';
import Instructions from './components/Instructions/Instructions';
import ButtonTop from './components/ButtonTop/ButtonTop';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <div className="pageBlock">
        <Instructions />
        <PictureDay />
        <ButtonTop />
        <Footer />
      </div>
    </>
  );
}

export default App;
