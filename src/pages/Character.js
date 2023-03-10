import React from "react";
import { useParams } from "react-router";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";

const Character = () => {
  const { id } = useParams();

  const { data, loading, error } = useCharacter(id);

  if (error) return <div>Something wronggg... {error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="Character">
      <img src={data.character.image} alt="" width={750} height={750} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {/* create button to back home */}
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
