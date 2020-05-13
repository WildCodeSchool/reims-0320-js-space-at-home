import React, { useState } from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './SearchBar.css';


const SearchImages = () => {
  const [images, setImages] = useState([]);
  const [keywords, setKeywords] = useState('');
  const [badSearch, setBadSearch] = useState(false);


  const search = () => {
    Axios.get(`https://images-api.nasa.gov/search?q=${keywords}&media_type=image`)
      .then((response) => response.data)
      .then((data) => {
        const image = data.collection.items;
        if (image.length === 0) {
          setBadSearch(true);
        } else {
          setBadSearch(false);
          setImages(data.collection.items);
        }
      });
  };

  return (
    <div className="SearchBarComponent">
      <SearchBar
        keywords={keywords}
        onSearch={search}
        setKeywords={setKeywords}
      />
      <div>
        <ImageList
          images={images}
          badSearch={badSearch}
          className="ImageList"
        />
      </div>
    </div>
  );
};

export default SearchImages;
