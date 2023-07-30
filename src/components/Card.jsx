import React from "react";

const Card = ({ character, onClose }) => (
  <div>
    <button onClick={onClose}>X</button>
    <h2>{character.name}</h2>
    <p>Status: {character.status}</p>
    <p>Species: {character.species}</p>
    <p>Gender: {character.gender}</p>
    <p>Origin: {character.origin.name}</p>
    <img src={character.image} alt={character.name} />
  </div>
);

export default Card;
