import React from "react";
import Card from "./Card";

const Cards = ({ searchResult }) => (
  <div>
    {searchResult ? (
      // Conditionally render the single card if there's a search result
      <Card
        character={searchResult}
        onClose={() => window.alert("Emulamos que se cierra la card")}
      />
    ) : null}
  </div>
);

export default Cards;
