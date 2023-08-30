import React from "react";
import { useNavigate } from "react-router-dom";

const Oppenheimer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J.
        Robert Oppenheimer to work on the top-secret Manhattan Project.
        Oppenheimer and a team of scientists spend years developing and
        designing the atomic bomb. Their work comes to fruition on July 16,
        1945, as they witness the world's first nuclear explosion, forever
        changing the course of history. ;
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bK6ldnjE3Y0?si=69mL2PNDEncIIz44"
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

export default Oppenheimer;
