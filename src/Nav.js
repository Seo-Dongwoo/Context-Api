import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h1>동우's MovieList</h1>
      <h2>List of Movies : {movies.length} </h2>
    </div>
  );
};

export default Nav;
