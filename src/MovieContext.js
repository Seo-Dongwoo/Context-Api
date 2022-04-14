import React, { useState, createContext } from "react";

export const MovieContext = createContext();

const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "해리포터",
      price: "$12",
      id: "23142",
    },
    {
      name: "아이언맨",
      price: "$8",
      id: "12354",
    },
    {
      name: "닥터스트레인지",
      price: "$10",
      id: "12142",
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
