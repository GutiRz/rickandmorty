/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

function Character(props) {
  const [data, setData] = useState({});


  async function fetchData() {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${props.match.params.charId}`);
    res
      .json()
      .then(res => setData(res));
  }

  useEffect(() => {
    fetchData();
  });
  
  return (
    <div>
      {
        <div>
          <h2>{data.name}</h2>
          <img src={data.image} alt={data.name} />
          <p>Status: {data.status}</p>
          <p>Specie: {data.species}</p>
          <p>Type: {data.type}</p>
          <p>Gender: {data.gender}</p>
          <p>Origin: {data.origin && data.origin.name}</p>
          <p>Location: {data.location && data.location.name}</p>
          <div>
            Episodes:
            <ul>
              {data.episode && data.episode.map((episode, key) => (
                <li key={key}> {episode} </li>
              ))}
            </ul>
          </div>
          
        </div>
      }
    </div>
  );
}

export default Character;
