import React, { useEffect, useState } from "react";
import CharItem from "../components/CharItem";
import Logo from "../logo.jpg";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";

import "../index.css";

import {
  LogoImg,
  SearchBar,
  Container,
  Main,
  NotFound,
  ButtonContainer
} from "../styles/App.style";

function App() {
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [datosApi, setDatosApi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [infoApi, setInfoApi] = useState("");

  useEffect(() => {
    setIsLoading(true);

    try {
      fetch(
        `https://rickandmortyapi.com/api/character/?name=${filterName}&status=${filterStatus}`
      )
        .then(response => response.json())
        .then(json => {
          setDatosApi(json.results);
          setInfoApi(json.info);
          setIsLoading(false);
        });
    } catch (error) {
      console.log("hay error");
    }
  }, [filterName, filterStatus]);

  const nextPage = () => {
    setIsLoading(true);

    fetch(infoApi.next)
      .then(response => response.json())
      .then(json => {
        setDatosApi(json.results);
        setInfoApi(json.info);
        setIsLoading(false);
      });
  };

  const prevPage = () => {
    setIsLoading(true);

    fetch(infoApi.prev)
      .then(response => response.json())
      .then(json => {
        setDatosApi(json.results);
        setInfoApi(json.info);
        setIsLoading(false);
      });
  };

  return (
    <Main>
      <LogoImg src={Logo} />

      <SearchBar>
        <TextField
          label="Name"
          value={filterName}
          onChange={e => setFilterName(e.target.value)}
        />
        &nbsp;&nbsp;&nbsp;
        <TextField
          select
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
          label="Status"
          style={{ width: 100 }}
        >
          <MenuItem value=" ">Any</MenuItem>
          <MenuItem value="alive">Alive</MenuItem>
          <MenuItem value="dead">Dead</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </TextField>
      </SearchBar>

      <Container>
        {isLoading ? (
          <NotFound>Loading...</NotFound>
        ) : datosApi ? (
          datosApi.map(char => (
            <CharItem className="item" key={char.id} {...char} />
          ))
        ) : (
          <NotFound>Characters not found.</NotFound>
        )}

        <ButtonContainer>
          {infoApi.prev && <Button onClick={prevPage}> {"<"} </Button>}
          {infoApi.next && <Button onClick={nextPage}> {">"} </Button>}
        </ButtonContainer>
      </Container>
    </Main>
  );
}

export default App;
