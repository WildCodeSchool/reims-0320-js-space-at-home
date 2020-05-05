import React, { useState } from 'react';
import Button from './Button';
import TextInput from './TextInput';
import './SearchBar.css';

const SearchBar = ({
   keywords, onSearch, setKeywords
}) => (
  <div className="SearchBar">
    <TextInput setText={setKeywords} text={keywords} />
    <Button onClick={onSearch}>Go !</Button>
  </div>
);

export default SearchBar;
