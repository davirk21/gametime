import React from "react";
import "./index.scss";
import seachIcon from "./search-icon.png";

export const Search = () => {
  return (
    <div className="search">
      <div className="search-input-container">
        <img className="search-input-icon" src={seachIcon} />
        <input class="search-input-box" value={"hello"} type="text" />
      </div>
      <div className="search-result-container"></div>
    </div>
  );
};
