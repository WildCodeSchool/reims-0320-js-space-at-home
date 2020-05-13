import React from "react";

const Button = ({ onClick, children }) => (
  <button className="buttonItem" onClick={onClick} type="button">
    {children}
  </button>
);

export default Button;
