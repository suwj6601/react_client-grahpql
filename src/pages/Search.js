import React, { useState } from "react";
import { gql, useQuery, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        name
        id
        image
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState();

  const [getLocations, { error, loading, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>

      {loading && <div>spinner...</div>}
      {error && <div>something wrong...</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
