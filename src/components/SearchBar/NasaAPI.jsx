import React, { useState } from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const SearchImages = () => {
  const [images, setImages] = useState([]);
  const [keywords, setKeywords] = useState('');

  const search = () => {
    Axios.get(
      `https://images-api.nasa.gov/search?q=${keywords}`,
    )
      .then((response) => response.data)
      .then((data) => {
        setImages(data.collection.items);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar
          keywords={keywords}
          onSearch={search}
          setKeywords={setKeywords}
        />
        <ImageList images={images} />
        <img src={images} alt="" />
      </header>
    </div>
  );
};

export default SearchImages;
