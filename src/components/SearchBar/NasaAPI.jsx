import React, { useState } from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './SearchBar.css';


const SearchImages = () => {
  const [images, setImages] = useState([]);
  const [keywords, setKeywords] = useState('');

  const search = () => {
    Axios.get(
      `https://images-api.nasa.gov/search?q=${keywords}&media_type=image`,
    )
      .then((response) => response.data)
      .then((data) => {
        setImages(data.collection.items);
      });
  };

  return (
    <div className="SearchBarComponent">
      <SearchBar
        keywords={keywords}
        onSearch={search}
        setKeywords={setKeywords}
      />
      <div className="ImageApi">
        <ImageList images={images} className="ImageList" />
      </div>
      <img src={images} className="ImageList" alt="" />
    </div>
  );
};

export default SearchImages;
