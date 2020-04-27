import React from 'react';
import PictureDay from './components/Event/PictureDay';
import './App.css';
import Instructions from './components/Instructions/Instructions';

function App() {
  return (
    <>
      <div className="pageBlock">
        <PictureDay />
        <Instructions />
      </div>
    </>
  );
}

export default App;
