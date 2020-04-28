import React from 'react';
import PictureDay from './components/BirthdayPicture/PictureDay';
import './App.css';
import Instructions from './components/Instructions/Instructions';
import ButtonTop from './components/ButtonTop/ButtonTop';


function App() {
  return (
    <>
      <div className="pageBlock">
        <Instructions />
        <PictureDay />
        <ButtonTop />
      </div>
    </>
  );
}

export default App;
