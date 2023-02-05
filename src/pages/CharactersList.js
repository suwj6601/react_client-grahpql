import React from "react";
import "./CharactersList.css";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

function CharactersList() {
  const { error, data, loading } = useCharacters();

  console.log({ error, loading, data });

  if (loading) return <p>Spinner...</p>;
  if (error) return <p>something wrong...</p>;
  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} alt="" />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default CharactersList;
