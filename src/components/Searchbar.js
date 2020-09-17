import React from "react";
import "./Searchbar.css";

export default function Searchbar(props) {
  const { search, onInputChange, searchInput } = props;
  return (
    <div className="searchbar">
      <h1>Food recipe</h1>
      <input
        className="input"
        value={search}
        onChange={onInputChange}
        placeholder="Search iteams...."
      />
      <button onClick={searchInput} className="btn" type="submit">
        {" "}
        click
      </button>
    </div>
  );
}
