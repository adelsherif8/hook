import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { title, description, posterURL, rating } = movie;
  return (
    <div className="moviecard">
      <button
        onClick={() => {
          navigate(`/${title}`);
        }}
      >
        <img src={posterURL} />
      </button>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>rating: {rating}</p>
    </div>
  );
};

export default MovieCard;
