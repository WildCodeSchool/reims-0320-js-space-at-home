import React from 'react';
import PictureDay from './components/Event/PictureDay';
import './App.css'
import SearchImages from './components/SearchBar/NasaAPI';

function App() {
  return (
    <>
      <div className="pageBlock">
        <PictureDay />
      </div>
      <div>
        <SearchImages />
      </div>
    </>
  );
}

export default App;
