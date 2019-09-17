import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Card = styled("div")`
  width: 1000px;

  margin: auto;
  padding: 30px;
  margin-top: 50px;
  margin-bottom: 50px;
  &:last-of-type {
    margin-bottom: 0;
  }
  border-radius: 10px;
  box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.37);
`;

export const Content = styled("div")`
  text-align: center;
`;

export const CharPicture = styled("img")`
  border-radius: 10px;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

export const CharName = styled("h2")`
  font-size: 34px;
  margin-bottom: 5px;
  text-align: center;
`;

export const CharDescription = styled("h3")`
  font-size: 14px;
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: 400;
  margin-left: 50px;
  text-align: left;
`;

export const CharStatus = styled("div")`
  font-size: 10px;
  display: inline-block;
  padding: 8px;
  border-radius: 25px;
  color: white;
  font-size: 11px;
  font-weight: bold;
  background: ${props =>
    props.status === "Alive"
      ? "#27AE60"
      : props.status === "Dead"
      ? "#EF4848"
      : "#000000"};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: "black";
  }
  margin-bottom: 50px;
`;
