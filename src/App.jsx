import React from 'react';
import PictureDay from './components/BirthdayPicture/PictureDay';
import './App.css';
import Instructions from './components/Instructions/Instructions';
import ButtonTop from './components/ButtonTop/ButtonTop';
import NavBarMB from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <div className="pageBlock">
        <NavBarMB />
        <Instructions />
        <PictureDay />
        <ButtonTop />
      </div>
    </>
  );
}

export default App;
