import React from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";

import "./SearchComp.scss";

const SearchComp = ({ search, setSearch }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleClose = () => {
    setSearch("");
  };
  
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <input
        value={search}
        className="search_input"
        placeholder="Search Movie"
        onChange={handleSearch}
      />
      <IconButton
        onClick={handleClose}
        color="primary"
        sx={{ p: "10px" }}
        aria-label="directions"
      >
        <CloseIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchComp;
