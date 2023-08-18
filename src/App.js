import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

const App = () => {
  const [movies, setmovies] = useState([
    {
      title: "Oppenheimer",
      description:
        "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.",
      posterURL: "./img/open.jpg",
      rating: 9,
    },
    {
      title: "Barbie",
      description:
        "Barbie suffers a crisis that leads her to question her world and her existence.",
      posterURL: "./img/barbie.png",
      rating: 2,
    },
  ]);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });
  const handleNewMovie = (event) => {
    const { name, value } = event.target;
    setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };
  const addMovie = () => {
    setmovies((prevMovies) => [...prevMovies, newMovie]);
    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });
  };

  const [filters, setFilters] = useState({ title: "", rating: "" });

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title
      .toLowerCase()
      .includes(filters.title.toLowerCase());
    const ratingMatch = movie.rating.toString().includes(filters.rating);
    return titleMatch && ratingMatch;
  });

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter changeFilter={handleFilterChange} />
      <MovieList movies={filteredMovies} />

      <div className="add-movie-form">
        <h2>Add a New Movie</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleNewMovie}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleNewMovie}
        />
        <input
          type="text"
          name="posterURL"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={handleNewMovie}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          min="1"
          max="10"
          value={newMovie.rating}
          onChange={handleNewMovie}
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>
    </div>
  );
};

export default App;
