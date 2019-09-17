/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

import {
  Card,
  CharPicture,
  CharName,
  CharStatus,
  CharDescription,
  StyledLink,
  Content
} from "../styles/Character.style";

function Character(props) {
  const [data, setData] = useState({});

  async function fetchData() {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/${props.match.params.charId}`
    );
    res.json().then(res => setData(res));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <Card>
        <Content>
          <CharName>{data.name}</CharName>
          <CharPicture src={data.image} alt={data.name} />
          <div>
            <CharDescription>
              Status:{" "}
              <CharStatus status={data.status}> {data.status} </CharStatus>
              <p>Specie: {data.species}</p>
              <p>Type: {data.type}</p>
              <p>Gender: {data.gender}</p>
              <p>Origin: {data.origin && data.origin.name}</p>
              <p>Location: {data.location && data.location.name}</p>
              <div>
                Episodes:
                <ul>
                  {data.episode &&
                    data.episode.map((episode, key) => (
                      <li key={key}> {episode} </li>
                    ))}
                </ul>
              </div>
            </CharDescription>
          </div>
          <StyledLink to={`/`}>
            <Button variant="contained" color="secondary" className="button">
              Back
            </Button>
          </StyledLink>
        </Content>
      </Card>
    </>
  );
}

export default Character;
