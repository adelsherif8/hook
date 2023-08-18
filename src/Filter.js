import React from "react";

const Filter = ({ changeFilter }) => {
  const handleTitleChange = (event) => {
    changeFilter({ title: event.target.value });
  };
  const handleRatingChange = (event) => {
    changeFilter({ rating: event.target.value });
  };
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        min="1"
        max="10"
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
