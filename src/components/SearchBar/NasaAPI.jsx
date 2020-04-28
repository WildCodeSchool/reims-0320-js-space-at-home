import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const NasaAPI = () => {
  const [images, setImages] = useState([]);
  const [keywords, setKeywords] = useState('');
  // const [tags, setTags] = useState([]);

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
    <Switch>
      <Route path="/">
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
      </Route>
    </Switch>
  );
};

export default NasaAPI;
