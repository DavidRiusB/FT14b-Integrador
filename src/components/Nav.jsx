import React from "react";
import SearchBar from "./SearchBar";

const Nav = ({ onSearch }) => (
  <div>
    <SearchBar onSearch={onSearch} />
  </div>
);

export default Nav;
