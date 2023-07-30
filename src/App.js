import React, { useState } from "react";
import "./App.css";

import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import characters from "./data.js";

function App() {
  const [searchResult, setSearchResult] = React.useState(null);

  const handleSearch = (result) => {
    setSearchResult(result);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <Cards characters={characters} searchResult={searchResult} />
    </div>
  );
}

export default App;
