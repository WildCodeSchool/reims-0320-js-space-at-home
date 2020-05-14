import React from 'react';

const TextInput = ({ setText, text }) => (
  <input
    className="inputPhoto"
    onChange={(event) => setText(event.target.value)}
    type="text"
    value={text}
    placeholder="ex: earth, apollo.."
  />
);

export default TextInput;
