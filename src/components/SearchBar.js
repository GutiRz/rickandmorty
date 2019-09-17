import React from "react";
import { useFilter } from "./hooks";

function SearchBar() {
  const { inputs, handleInputChange } = useFilter();

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={inputs.name}
        />
      </label>

      <label>
        State:
        <select name="status" onChange={handleInputChange} value={inputs.state}>
          <option value="empty">-</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </label>
    </form>
  );
}

export default SearchBar;
