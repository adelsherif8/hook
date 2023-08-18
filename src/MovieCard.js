import React from "react";

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;
  return (
    <div className="moviecard">
      <img src={posterURL} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>rating: {rating}</p>
    </div>
  );
};

export default MovieCard;
