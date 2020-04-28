import React, { useState } from 'react';
import Button from './Button';
import TextInput from './TextInput';

const SearchBar = ({
   keywords, onSearch, setKeywords, style 
}) => (
  <div style={style}>
    <TextInput setText={setKeywords} text={keywords} />
    <Button onClick={onSearch}>Go !</Button>
  </div>
);

export default SearchBar;
