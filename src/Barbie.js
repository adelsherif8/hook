import React from "react";
import { useNavigate } from "react-router-dom";

const Barbie = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        Barbie suffers a crisis that leads her to question her world and her
        existence.
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pBk4NYhWNMM?si=SpQ5Fr8lvPr7kj-O"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      ;<button onClick={() => navigate("/home")}>Go back to Home</button>
    </>
  );
};

export default Barbie;
