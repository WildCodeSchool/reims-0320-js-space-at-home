import React from 'react';
import Button from './Button';
import TextInput from './TextInput';
import './SearchBar.css';


const SearchBar = ({
  keywords, onSearch, setKeywords
}) => (
  <>
    <div className="galleryExplanation">
      <p>In this section you are able to find some pictures with a keyword about space.</p>
    </div>
    <div className="SearchBar">
      <TextInput setText={setKeywords} text={keywords} />
      <Button onClick={onSearch}>
        <img className="ButtonIcon" src="https://cdn0.iconfinder.com/data/icons/thin-science-space/24/thin-1045_space_moon_planet_galaxy_saturn-512.png" alt="planet" />
      </Button>
    </div>
  </>
);

export default SearchBar;
