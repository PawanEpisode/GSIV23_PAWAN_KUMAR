import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { getLatestMovies } from "../../utility/helper";

import { setMovies } from "../../redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { customAPI, customUrlMovieDB } from "../../utility/constants";

import "./MovieList.css";

const MovieList = ({ search }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const [categoryMovieList, setCategoryMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchMovieList = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const movieList = await fetch(
        `${customUrlMovieDB}/movie/upcoming?${customAPI}&page=${page}`
      );
      const movies = await movieList.json();
      const latestMovies = getLatestMovies(movies?.results ?? []);
      setCategoryMovieList([...categoryMovieList, ...latestMovies]);
      dispatch(setMovies([...categoryMovieList, ...latestMovies]));
      setPage((prevPage) => prevPage + 1);
      console.log("Upcoming movies", latestMovies);
    } catch (error) {
      console.log(`error : ${error}`);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight - 20 ||
      isLoading
    ) {
      return;
    }
    console.log("handleScroll");
    fetchMovieList();
    window.scrollTo(0, document.documentElement.offsetHeight - 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  useEffect(() => {
    console.log("useeffect");
    fetchMovieList();
  }, []);

  // Removing duplicacy
  const MappedMovies = movies.reduce(
    (acc, x) => acc.concat(acc.find((y) => y.id === x.id) ? [] : [x]),
    []
  );
  return (
    <div className="movielist-container">
      <Stack className="movielist-text-container">
        <Typography variant="h3">Upcoming Movies</Typography>
      </Stack>
      <Stack
        className="movielist-moviecard"
        sx={{
          gap: { lg: "50px", xs: "40px" },
        }}
      >
        {MappedMovies?.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Stack>
      <Stack>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </Stack>
    </div>
  );
};

export default MovieList;
