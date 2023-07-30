const Card = ({ character, onClose }) => (
  <div key={character.id}>
    <button onClick={onClose}>X</button>
    <h2>{character.name}</h2>
    <h2>{character.status}</h2>
    <h2>{character.species}</h2>
    <h2>{character.gender}</h2>
    <h2>{character.origin.name}</h2>
    <img src={character.image} alt="Character" />
  </div>
);
export default Card;
