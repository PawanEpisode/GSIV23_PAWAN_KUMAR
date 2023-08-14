import React from "react";
import { Stack, Typography, TextField, Input } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import SearchComp from "../SearchComponent/SearchComp";

const Navbar = ({ search, setSearch }) => {

    
  return (
    <Stack className="header">
      <Stack className="header-left">
        <Link to="/movieapp" className="link-text" ><Typography className="movix">Movix</Typography></Link>
        <SearchComp search={search} setSearch={setSearch}/>
      </Stack>
      <Stack className="header-right">
        <Link className="link-text" to="/movieapp/movies/popular" >
          <span>Popular</span>
        </Link>
        <Link className="link-text" to="/movieapp/movies/top_rated" >
          <span>Top Rated</span>
        </Link>
        <Link className="link-text" to="/movieapp/movies/upcoming" >
          <span>Upcoming</span>
        </Link>
        <Link to="/movieapp">
          <HomeIcon />
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
