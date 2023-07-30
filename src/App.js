import React, { useState } from "react";
import axios from "axios";

import "./App.css";

import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  const [renderedCharacterIds, setRenderedCharacterIds] = useState([]);

  // Function to add the default character to the characters state
  function onSearch(id) {
    // Cheks if the characters is alredy rendered
    if (renderedCharacterIds.includes(id)) {
      window.alert("This character is already rendered!");
    } else {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            setRenderedCharacterIds((prevIds) => [...prevIds, id]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
    }
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} setCharacters={setCharacters} />
    </div>
  );
}

export default App;
