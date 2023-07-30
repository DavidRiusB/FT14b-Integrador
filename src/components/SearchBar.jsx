import React from "react";
import characters from "../data"; // Importing the characters array from data.js

const SearchBar = ({ onSearch }) => {
  const handleSearchClick = () => {
    // Example: Get the character ID from the input field
    const characterID = parseInt(document.getElementById("searchInput").value);

    // Perform the search in the local characters array
    const searchResult = characters.find(
      (character) => character.id === characterID
    );

    // Call the onSearch function with the search result (character object) or null if not found
    onSearch(searchResult);
  };

  return (
    <div>
      <input type="text" id="searchInput" />
      <button onClick={handleSearchClick}>Agregar</button>
    </div>
  );
};

export default SearchBar;
