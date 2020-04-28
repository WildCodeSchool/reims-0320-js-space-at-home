import React from 'react';

const TextInput = ({ setText, text }) => (
  <input
    onChange={(event) => setText(event.target.value)}
    type="text"
    value={text}
  />
);

export default TextInput;
