import React from "react";
import "../styles/inputbar.scss";
const InputBar = () => {
  return (
    <div className="inputbar-container">
      <span className="material-icons search-icon">search</span>
      <input placeholder="Search here..." />
    </div>
  );
};

export default InputBar;
