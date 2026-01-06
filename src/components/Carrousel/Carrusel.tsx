import './s.css'
import { useState } from "react";

import plshelp from "../../assets/plshelpihavearaygun.jpg";
import toothless from "../../assets/toothless-dancing.gif";

export const Carrusel = () => {
  const images = [plshelp, toothless];
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className='carrousel'>
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          style={{ width: "auto", height: "100%", borderRadius: "20px" }}
        />
        <div>
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
        </div>
      </div>
    </>
  );
};
