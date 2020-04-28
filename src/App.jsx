import React from 'react';

import PictureDay from './components/Event/PictureDay';
import './App.css'
import SearchImages from './components/SearchBar/NasaAPI';
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
      <div>
        <SearchImages />
      </div>
    </>
  );
}

export default App;
