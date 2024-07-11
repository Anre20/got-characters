import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CharactersContext } from '../context/CharactersContext';
import './Characters.css'; 

const Characters = () => {
  const { characters, loading } = useContext(CharactersContext);

  if (loading) {
    return <p>Loading characters...</p>;
  }

  return (
    <div className="characters-page">
      <div className="background-image"></div>
      <div className="content">
        <h1>Characters</h1>
        <ul>
          {characters.map(character => (
            <li key={character.id}>
              <Link to={`/characters/${character.id}`}>{character.fullName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Characters;
