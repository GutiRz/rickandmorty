import styled from '@emotion/styled';

import { Link } from "react-router-dom";

export const Char = styled("div")`
  display: flex;
  padding: 10px;
  margin: 10px;
  &:last-of-type {
    margin-bottom: 0;
  }
  border-radius: 10px;
  box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.37);
`;

export const CharPicture = styled("img")`
  margin-right: 10px;
  border-radius: 10px;
  width: 200px;
  align-self: flex-start;
`;

export const CharName = styled("h2")`
  font-size: 24px;
  margin-bottom: 5px;
`;

export const CharDescription = styled("h3")`
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 400;
`;

export const CharStatus = styled("div")`
  font-size: 10px;
  display: inline-block;
  padding: 8px;
  border-radius: 25px;
  color: white;
  font-size: 11px;
  font-weight: bold;
  background: ${props => (props.status === "Alive" ? "#27AE60" : (props.status === "Dead" ? "#EF4848" : "#000000"))};
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: 'black'

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: 'black'
    }
`;