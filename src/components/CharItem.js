/* eslint-disable react/prop-types */
import React from "react";

import {
  Char,
  CharPicture,
  CharName,
  CharDescription,
  CharStatus,
  StyledLink
} from "../styles/CharListItem.style";

function CharItem(char) {
  return (
    <Char className="item">
      <StyledLink to={`/Character/${char.id}`}>
        <CharPicture src={char.image} alt={char.name} />
      </StyledLink>
      <div>
        <CharName>{char.name}</CharName>
        <CharDescription>Specie: {char.species}</CharDescription>
        <CharStatus status={char.status}> {char.status} </CharStatus>
      </div>
    </Char>
  );
}

export default CharItem;
