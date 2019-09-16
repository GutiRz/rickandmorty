import React, { useEffect, useState } from "react";
import CharItem from "../components/CharItem";
import Logo from "../logo.jpg";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import "../index.css";

import { LogoImg, SearchBar, Container, Main } from "../styles/App.style";

function App() {
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [datosApi, setDatosApi] = useState([]);
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    setIsData(false);

    try {
      fetch(
        `https://rickandmortyapi.com/api/character/?name=${filterName}&status=${filterStatus}`
      )
        .then(response => response.json())
        .then(json => {
          setDatosApi(json.results);
          setIsData(true);
        });
    } catch (error) {
      console.log("hay error")
      
    }
  }, [filterName, filterStatus]);

  return (
    <Main>
      <LogoImg src={Logo} />

      <SearchBar>
        <TextField
          label="Name"
          value={filterName}
          onChange={e => setFilterName(e.target.value)}
        />

        <Select
          id="status"
          name="status"
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
          placeholder="Status"
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="alive">Alive</MenuItem>
          <MenuItem value="dead">Dead</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </SearchBar>

      <Container>
        {isData ? datosApi.map(char => (
          <CharItem className="item" key={char.id} {...char} />
        )) : <div>Loading ...</div>}
      </Container>
    </Main>
  );
}

export default App;
