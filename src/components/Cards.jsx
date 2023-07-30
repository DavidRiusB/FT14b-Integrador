import React from "react";
import Card from "./Card";

const Cards = ({ characters, setCharacters }) => {
  // Added "setCharacters" in destructuring
  const handleClose = (id) => {
    // Convert the id to a number (since it's received as a string)
    const characterId = parseInt(id);

    // Filter out the character with the given id from the characters state
    setCharacters((prevCharacters) =>
      prevCharacters.filter((character) => character.id !== characterId)
    );
  };

  return (
    <div>
      {characters.map((character) => (
        <Card
          key={character.id}
          character={character}
          onClose={() => handleClose(character.id)}
        />
      ))}
    </div>
  );
};

export default Cards;
