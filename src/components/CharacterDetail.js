import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CharactersContext } from '../context/CharactersContext';

const CharacterDetail = () => {
  const { id } = useParams();
  const { characters, loading } = useContext(CharactersContext);
  const character = characters.find(c => c.id === parseInt(id));

  if (loading) {
    return <p>Loading character...</p>;
  }

  if (!character) {
    return <p>Character not found</p>;
  }

  return (
    <div>
      <h1>{character.fullName}</h1>
      <img src={character.imageUrl} alt={character.fullName} />
      <p>Title: {character.title}</p>
      <p>Family: {character.family}</p>
    </div>
  );
};

export default CharacterDetail;
