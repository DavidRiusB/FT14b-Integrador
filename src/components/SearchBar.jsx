import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  // State to keep track of the input character ID
  const [characterID, setCharacterID] = useState("");

  // Event handler for input change
  const handleInputChange = (event) => {
    // Update the characterID state with the input value
    setCharacterID(event.target.value);
  };

  const handleRandomSearch = () => {
    // Generate a random character ID (between 1 and 826, which is the total number of characters in the API)
    const randomCharacterId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomCharacterId);
  };

  // Event handler for the search button click
  const handleSearchClick = () => {
    // Convert the characterID to a number (since it's received as a string)
    const parsedCharacterID = parseInt(characterID);

    // Check if the parsedCharacterID is a valid number
    if (!isNaN(parsedCharacterID)) {
      // Call the onSearch function with the parsedCharacterID
      onSearch(parsedCharacterID);

      // Clear the input field after the search
      setCharacterID("");
    } else {
      // Show an alert if the input is not a valid number
      window.alert("Please enter a valid character ID.");
    }
  };

  return (
    <div>
      {/* Input field to enter the character ID */}
      <input
        type="text"
        id="searchInput"
        value={characterID}
        onChange={handleInputChange}
      />
      {/* Button to trigger the search */}
      <button onClick={handleSearchClick}>Search</button>
      <button onClick={handleRandomSearch}>Random Character</button>
    </div>
  );
};

export default SearchBar;
