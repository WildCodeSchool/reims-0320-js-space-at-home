import React from 'react';
import Aos from 'aos';
import Button from './Button';
import TextInput from './TextInput';
import './SearchBar.css';
import 'aos/dist/aos.css';

Aos.init({ duration: 1800 });

const SearchBar = ({
  keywords, onSearch, setKeywords
}) => (
  <div>
    <h2 className="seeMore">Hey , want to see more ?   </h2>
    <div className="SearchBar">
      <TextInput setText={setKeywords} text={keywords} />
      <Button data-aos="zoom-in" onClick={onSearch}>
        <img className="ButtonIcon" src="https://cdn0.iconfinder.com/data/icons/thin-science-space/24/thin-1045_space_moon_planet_galaxy_saturn-512.png" alt="planet" />
      </Button>
    </div>
  </div>
);

export default SearchBar;
