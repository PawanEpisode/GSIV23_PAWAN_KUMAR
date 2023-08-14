import React, { useState } from "react";
import "./App.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import MovieList from "./components/MovieList/MovieList";

function App() {
  const [search, setSearch] = useState('');

  return (
    <Box width={"400px"} sx={{ width: { xl: "1488px" } }} m="auto">
      <Router>
        <Navbar search={search} setSearch={setSearch}/>
        <Routes>
          <Route index path="/movieapp" element={<Home />} />
          <Route path="/movieapp/movie/:id" element={<MovieDetails />} />
          <Route path="/movieapp/movies/:type" element={<MovieList />} />
          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
      <Footer />
    </Box>
  );
}

export default App;
