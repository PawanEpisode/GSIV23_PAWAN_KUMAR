import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { getLatestMovies } from "../../utility/helper";
import { customAPI, customUrlMovieDB } from "../../utility/constants";

import "./SearchedMovie.css";

const SearchedMovie = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const fetchMovie = async () => {
    if (search?.length) {
      setLoading(true);
      setError(null);
      try {
        const movieList = await fetch(
          `${customUrlMovieDB}/search/movie?${customAPI}&query=${search}&page=${page}`
        );
        const response = await movieList.json();
        const latestMovies = getLatestMovies(response?.results ?? []);
        setMovies([...movies, ...latestMovies]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.log(`error: ${JSON.stringify(error)}`);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [search]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight - 20 ||
      loading
    ) {
      return;
    }
    fetchMovie();
    window.scrollTo(0, document.documentElement.offsetHeight - 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  if (!search) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Stack className="searched-movielist-text-container">
        <Typography variant="h3">{`${movies.length} Movies Found`}</Typography>
      </Stack>
      <Stack
        className="searched-movielist-moviecard"
        sx={{
          gap: { lg: "50px", xs: "40px" },
        }}
      >
        {movies?.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Stack>
      <Stack>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </Stack>
    </>
  );
};

export default SearchedMovie;
