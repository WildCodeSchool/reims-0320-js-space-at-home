import React from 'react';r
import Navbar from './Navbar';
import PictureDay from './components/Event/PictureDay';

function App() {
  return (
    <>
      <div className="pageBlock">
        <PictureDay />
        <Navbar />
      </div>
    </>
  );
}

export default App;
